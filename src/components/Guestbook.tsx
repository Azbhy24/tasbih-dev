import { useState, useEffect, FormEvent } from "react";
import { 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  limit, 
  onSnapshot, 
  serverTimestamp 
} from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";
import { motion, AnimatePresence } from "motion/react";
import { LogIn, LogOut, MessageSquare, Trash2, Heart, Sparkles, AlertCircle } from "lucide-react";
import { auth, db, signInWithGoogle, handleSignOut, handleFirestoreError, OperationType } from "../lib/firebase";

interface Testimonial {
  id: string;
  userId: string;
  userName: string;
  userPhoto: string;
  text: string;
  createdAt: any;
}

export default function Guestbook() {
  const [user, setUser] = useState<User | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false);
  const [showNotification, setShowNotification] = useState("");

  // Track user login flow
  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubAuth();
  }, []);

  // Set up real-time snapshot listener
  useEffect(() => {
    const q = query(collection(db, "testimonials"), orderBy("createdAt", "desc"), limit(40));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list: Testimonial[] = [];
      snapshot.forEach((docSnap) => {
        const d = docSnap.data();
        list.push({
          id: docSnap.id,
          userId: d.userId || "",
          userName: d.userName || "Seorang Visitor",
          userPhoto: d.userPhoto || "",
          text: d.text || "",
          createdAt: d.createdAt,
        });
      });
      setTestimonials(list);
      setIsLoading(false);
    }, (error) => {
      // Required by guideline: Handle permissions or load issues gracefully
      handleFirestoreError(error, OperationType.LIST, "testimonials");
    });

    return () => unsubscribe();
  }, []);

  const handleAuthClick = async () => {
    if (user) {
      try {
        await handleSignOut();
        triggerAlert("Berhasil log out.");
      } catch (err) {
        console.error("Signout error:", err);
      }
    } else {
      try {
        await signInWithGoogle();
        triggerAlert("Berhasil login dengan Google!");
      } catch (err) {
        console.error("Login error:", err);
      }
    }
  };

  const triggerAlert = (msg: string) => {
    setShowNotification(msg);
    setTimeout(() => setShowNotification(""), 4000);
  };

  const handlePostSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) {
      triggerAlert("Silakan login dengan Google terlebih dahulu.");
      return;
    }
    if (!text.trim()) return;
    if (text.length > 1000) {
      triggerAlert("Maksimal text adalah 1000 karakter.");
      return;
    }

    setIsPosting(true);
    const testimonialId = "test-" + Date.now() + "-" + Math.random().toString(36).substring(2, 9);
    const docPath = `testimonials/${testimonialId}`;

    try {
      await setDoc(doc(db, "testimonials", testimonialId), {
        userId: user.uid,
        userName: user.displayName || user.email || "Visitor",
        userPhoto: user.photoURL || "",
        text: text.trim(),
        createdAt: serverTimestamp(),
      });
      setText("");
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, docPath);
    } finally {
      setIsPosting(false);
    }
  };

  const handleDelete = async (id: string) => {
    const docPath = `testimonials/${id}`;
    try {
      await deleteDoc(doc(db, "testimonials", id));
      triggerAlert("Testimonial Anda berhasil dihapus.");
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, docPath);
    }
  };

  return (
    <div id="guestbook" className="mt-20 border-t border-indigo-950/30 pt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="text-left max-w-2xl">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>GUESTBOOK & TESTIMONI REAL-TIME</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Cerita & Kesan Kemitraan Anda
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400">
              Bagikan kesan Anda setelah berkolaborasi, berinteraksi, atau berkonsultasi seputar solusi Web, Automasi AI, dan Manajemen Bisnis bersama Aby Bhy.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-2 md:mt-0">
            {user ? (
              <div className="flex items-center gap-3 px-3 py-1.5 bg-zinc-950/40 border border-indigo-500/10 rounded-full">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || "User"} referrerPolicy="no-referrer" className="w-6 h-6 rounded-full" />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-indigo-650 flex items-center justify-center text-[10px] text-white font-bold">
                    {user.displayName?.charAt(0) || "U"}
                  </div>
                )}
                <span className="text-xs text-zinc-300 font-medium max-w-[120px] truncate">{user.displayName}</span>
                <button
                  onClick={handleAuthClick}
                  className="p-1 px-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded text-[10px] font-bold tracking-widest uppercase transition-all flex items-center gap-1 cursor-pointer"
                >
                  <LogOut className="w-3 h-3 text-red-400" />
                  <span>Out</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleAuthClick}
                className="px-4 py-2 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/20 hover:border-indigo-500/40 text-indigo-300 hover:text-white rounded-full text-[10px] font-black tracking-widest uppercase transition-all flex items-center gap-1.5 cursor-pointer shadow-lg active:scale-95 duration-200"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Masuk dengan Google</span>
              </button>
            )}
          </div>
        </div>

        {/* Global Feedback notification layer */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 p-3 bg-zinc-950 border border-indigo-500/20 rounded-xl text-center text-xs text-indigo-300 font-bold flex items-center justify-center gap-2 max-w-sm mx-auto"
            >
              <AlertCircle className="w-4 h-4 text-indigo-400" />
              <span>{showNotification}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Post Feedback Area */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-xl border border-indigo-500/15 bg-zinc-950/45 text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-transparent blur-xl pointer-events-none" />
              
              <h4 className="text-white text-sm font-bold font-sans tracking-wide mb-4">
                Tinggalkan Ulasan / Feedback
              </h4>

              <form onSubmit={handlePostSubmit} className="space-y-4">
                <textarea
                  required
                  rows={4}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={user ? "Tulis kesaksian, saran, atau komentar Anda di sini..." : "Silakan login di atas untuk mulai mengisi testimoni..."}
                  disabled={!user}
                  maxLength={1000}
                  className="w-full px-4 py-3 bg-[#030306] border border-indigo-500/20 focus:border-indigo-400/80 rounded-xl text-xs text-white placeholder-zinc-700 outline-none transition-all disabled:opacity-40 disabled:cursor-not-allowed resize-none shadow-inner"
                />

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-500">
                    {text.length}/1000 karakter
                  </span>

                  <button
                    type="submit"
                    disabled={!user || isPosting || !text.trim()}
                    className="p-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-[10px] tracking-widest uppercase rounded-lg flex items-center gap-1.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer border-none"
                  >
                    <span>{isPosting ? "Mengirim..." : "Kirim"}</span>
                    <Heart className={`w-3 h-3 ${text.trim() ? "fill-white text-white" : ""}`} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Testimonials List Area */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-xl border border-indigo-500/15 bg-zinc-950/20 min-h-[300px] flex flex-col relative overflow-hidden shadow-xl">
              
              {isLoading ? (
                <div className="m-auto flex flex-col items-center gap-3">
                  <div className="w-6 h-6 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
                  <span className="text-xs font-mono text-zinc-500">Memuat testimoni...</span>
                </div>
              ) : testimonials.length === 0 ? (
                <div className="m-auto flex flex-col items-center text-center max-w-sm">
                  <MessageSquare className="w-8 h-8 text-indigo-500/20 mb-3" />
                  <span className="text-sm font-semibold text-zinc-400">Belum ada testimoni</span>
                  <p className="text-xs text-zinc-500 mt-1">
                    Jadilah yang pertama untuk meninggalkan jejak di Guestbook dengan cara masuk/log-in menggunakan akun Google Anda!
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  <AnimatePresence mode="popLayout">
                    {testimonials.map((test) => (
                      <motion.div
                        key={test.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="p-5 rounded-xl border border-indigo-500/10 bg-zinc-950/40 backdrop-blur-md flex flex-col justify-between text-left relative group transition-all hover:border-indigo-500/20"
                      >
                        <p className="text-xs text-zinc-300 leading-relaxed font-sans italic flex-grow whitespace-pre-wrap">
                          "{test.text}"
                        </p>

                        <div className="flex items-center justify-between border-t border-indigo-950/40 pt-4 mt-4">
                          <div className="flex items-center gap-2">
                            {test.userPhoto ? (
                              <img src={test.userPhoto} alt={test.userName} referrerPolicy="no-referrer" className="w-5 h-5 rounded-full ring-1 ring-indigo-500/20" />
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-indigo-950 flex items-center justify-center text-[8px] text-indigo-300 font-bold border border-indigo-500/20">
                                {test.userName.charAt(0)}
                              </div>
                            )}
                            <div className="flex flex-col">
                              <span className="text-[10px] text-white font-bold leading-none truncate max-w-[150px]">{test.userName}</span>
                              <span className="text-[8px] text-zinc-500 font-mono mt-0.5">Visitor</span>
                            </div>
                          </div>

                          {user && user.uid === test.userId && (
                            <button
                              onClick={() => handleDelete(test.id)}
                              className="text-zinc-650 hover:text-red-400 p-1 rounded hover:bg-red-500/10 transition-colors cursor-pointer"
                              title="Hapus testimonial Anda"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}

              {/* Little styling overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-zinc-950/30 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
