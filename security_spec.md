# Security Specification

## 1. Data Invariants

- **Inquiries (Messages)**:
  - Form postings do not require authentication, but must be fully validated.
  - Document IDs must conform to a strict alphanumeric-hyphen pattern (`isValidId`).
  - Required fields are `name`, `email`, `message`, and `createdAt`.
  - Max limits: `name` <= 100 characters, `email` <= 100 characters, `message` <= 5000 characters.
  - No client-supplied dates: `createdAt` must exactly match the server’s timestamp (`request.time`).
  - No reads, updates, or deletes of visitor messages by other clients are permitted (read access denied by default).

- **Testimonials (Guestbook entries)**:
  - Read & list operations are public.
  - Create operations require a valid authentication container (`request.auth.uid`).
  - Document IDs must conform to strict alphanumeric-hyphen rules.
  - User ID inside the document (`userId`) must exactly match `request.auth.uid` to prevent identity spoofing.
  - Required attributes: `userId`, `userName`, `userPhoto`, `text`, `createdAt`.
  - Limit: `text` content <= 1000 characters.
  - Timestamp must match `request.time`.
  - Only the owner (`resource.data.userId == request.auth.uid`) can delete their testimonial. Updates are barred.

---

## 2. The "Dirty Dozen" Payloads

Here are the 12 specific payloads intended to challenge security logic, all of which must return `PERMISSION_DENIED`:

### Collection: `messages`

1.  **ID Poisoning Attack**: ID with illegal characters.
    -   *Path*: `/messages/malicious##id`
    -   *Action*: `create`
    -   *Payload*: `{ "name": "A", "email": "a@a.com", "message": "Hi", "createdAt": "request.time" }`

2.  **Shadow/Ghost Field Injection**: Adding unapproved parameters.
    -   *Path*: `/messages/msg1`
    -   *Action*: `create`
    -   *Payload*: `{ "name": "A", "email": "a@a.com", "message": "Hi", "createdAt": "request.time", "isAdmin": true }`

3.  **Spoofed Client Clock Attack**: Sending a historical raw string as `createdAt`.
    -   *Path*: `/messages/msg2`
    -   *Action*: `create`
    -   *Payload*: `{ "name": "A", "email": "a@a.com", "message": "Hi", "createdAt": "2020-01-01T00:00:00Z" }`

4.  **Buffer Overflow/Denial-of-Wallet Attack**: Enormous message body.
    -   *Path*: `/messages/msg3`
    -   *Action*: `create`
    -   *Payload*: `{ "name": "A", "email": "a@a.com", "message": "VeryLargeBufferOf1MB...", "createdAt": "request.time" }`

5.  **Data Harvesting Attack**: Unauthorized retrieval of other visitors' queries.
    -   *Path*: `/messages/msg_some`
    -   *Action*: `get` / `list`
    -   *Payload*: None (Attempt to read visitor messages)

6.  **Admin Spoofing/Tampering Attack**: Attempt to delete visitor inquiries.
    -   *Path*: `/messages/msg_some`
    -   *Action*: `delete`
    -   *Payload*: None

### Collection: `testimonials`

7.  **Unauthenticated Write Attack**: Anonymous visitor trying to create a testimonial.
    -   *Path*: `/testimonials/test1`
    -   *Action*: `create`
    -   *Auth*: `null`
    -   *Payload*: `{ "userId": "attacker", "userName": "A", "userPhoto": "", "text": "Spoof", "createdAt": "request.time" }`

8.  **Identity Spoofing Attack**: Authenticated user trying to post a testimonial on behalf of someone else.
    -   *Path*: `/testimonials/test2`
    -   *Action*: `create`
    -   *Auth*: `{ "uid": "real_user_id" }`
    -   *Payload*: `{ "userId": "victim_user_id", "userName": "Victim", "userPhoto": "", "text": "Spoof", "createdAt": "request.time" }`

9.  **Testimonial Content Flooding**: Massive text content payload.
    -   *Path*: `/testimonials/test3`
    -   *Action*: `create`
    -   *Auth*: `{ "uid": "real_user_id" }`
    -   *Payload*: `{ "userId": "real_user_id", "userName": "User", "userPhoto": "", "text": "A".repeat(5000), "createdAt": "request.time" }`

10. **Foreign Testimonial Deletion**: Attempting to delete a testimonial owned by another user.
    -   *Path*: `/testimonials/test_other`
    -   *Action*: `delete`
    -   *Auth*: `{ "uid": "intruder_user_id" }`
    -   *Existing Document*: `{ "userId": "victim_user_id", "userName": "Victim", "text": "Hello" }`

11. **Testimonial Tampering (Update)**: Attempt to update an existing testimonial.
    -   *Path*: `/testimonials/test4`
    -   *Action*: `update`
    -   *Auth*: `{ "uid": "real_user_id" }`
    -   *Payload*: `{ "userId": "real_user_id", "userName": "User", "userPhoto": "", "text": "Altered Text", "createdAt": "request.time" }`

12. **Missing Vital Fields**: Omitting `userName`.
    -   *Path*: `/testimonials/test5`
    -   *Action*: `create`
    -   *Auth*: `{ "uid": "real_user_id" }`
    -   *Payload*: `{ "userId": "real_user_id", "userPhoto": "", "text": "No name", "createdAt": "request.time" }`
