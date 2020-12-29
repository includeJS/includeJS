---
path: "/missing-semester-09"
date: "2020-10-31"
title: "Missing Semester 09 - Security and Cryptography"
tags:
  - missing-semester
  - bash
description: "On entropy, hash functions, key derivation functions, symmetric and asymmetric cryptography  💪."
---

- 📹 [YouTube Link](https://www.youtube.com/watch?v=tjwobAmnKTo&feature=emb_logo)

- ✏️ [Official Notes](https://missing.csail.mit.edu/2020/security/)

## Entropy

Entropy is a measure of randomness.

log2(#possibilities):

- 1 bit for a coin flip
- 2.6 (log2(6))

Roughly 40 bits is considered a strong password (80 bits for offline attacks and to be really secure).

#### 🤔 What is encryption?

Encryption is a way of using mathematics to scramble the content of a digital file or message so that it can only be decrypted and read by someone who has a particular piece of information, such as a password or an encryption key.

#### 🤔 How to break passwords?

- credential Stuffing (purchasing credentials from breached sites)
- phishing (man-in-the-middle attack)
- keystroke logging (malware saves everything you entered)
- local discovery (when you physically find someone's password)
- extortion
- password spray (guessing using common passwords)
- brute force (penetrating networks to extract files)

## Hash functions

Hash functions are functions that map a variable amount of data (input) into a fixed output.

sha1(bytes) -> 160 bits, typically rendered as a hexadecimal number, 40 digits long. (like in git for content address storage).

SHA-1 is no longer considered a strong cryptographic hash function.

`hash(value: array<byte>) -> vector<byte, N>` (for some fixed N)

Hash functions have a number of properties:

- Deterministic: the same input always generates the same output.
- Non-invertible: it is hard to figure out the input based on the output
- Collision resistant: it's hard to find two different inputs that produce the same output

#### 🤔 What is a checksum?

A checksum is a sequence of numbers and letters used to check data for errors. If you know the checksum of an original file, you can use a checksum utility to confirm your copy is identical.

Linux distributions often provide checksums so you can verify your Linux ISO properly downloaded before burning it to a disc or putting it on a USB drive.

Typical algorithms used for this include MD5, SHA-1, SHA-256, and SHA-512.

### Commitement schemes

If you want to do a fair coin toss “in my head”, without a trusted shared coin that two parties can see. I could choose a value r = random(), and then share h = sha256(r)

## Key derivation functions (KDFs)

KDFs are similar to hask functions, but on top of that they are (purposefully) slow to compute. Used for password applications (to slow down brute-force attacks)

A key derivation function is an algorithm that generates a cryptographic key from a password or a master key.

#### 🤔 What is a cryptographic key?

A cryptographic key is data that is used to lock or unlock cryptographic functions such as encryption, authentication and authorization. Keys are typically designed to be both random and reasonably long such that they are difficult to guess.

## Symmetric key cryptography

In symmetric-key cryptography (alias secret key cryptography) the same key is used to encrypt and decrypt the data.

```
keygen() -> key  (a randomized function that proudces the key)

encrypt(plaintext: array<byte>, key) -> array<byte>  (the ciphertext)
decrypt(ciphertext: array<byte>, key) -> array<byte>  (the plaintext aka data)
```

Meaning that given a ciphertext, you can't figure out the plaintext without the key.

Correctness property: if you decrypt the cipher with a key, it will give you back the original plaintext.

Used for encrypting files for storage on un-encrypted cloud service. They are somewhat less useful for sending messages from one computer to another because both ends of the communication channel must possess the key and must keep it secure

#### 🤔 What is salt?

Salt is/are random data that is added to data before it is passed to a hash function. It is a cryptographic technique that makes hash nodes more difficult to reverse.

## Asymmetric key cryptography

A matching public/private key pair whereby anyone can encrypt with the public key, but only those who hold the private key can decrypt.

```
keygen() -> (public key, private key)  (this function is randomized)

encrypt(plaintext: array<byte>, public key) -> array<byte>  (the ciphertext)
decrypt(ciphertext: array<byte>, private key) -> array<byte>  (the plaintext)

sign(message: array<byte>, private key) -> array<byte>  (the signature)
verify(message: array<byte>, signature: array<byte>, public key) -> boolean  (whether or not the signature is valid)
```

- hard to forge (without the private key)
- correctness

When you run ssh-keygen, it generates an asymmetric key pair, public_key, private_key.

#### 🤔 What is PGP?

Pretty Good Privacy (PGP) is an encryption program that provides cryptographic privacy and authentication for data communication. Used by ProtonMail

[Video explanation](https://myshadow.org/resources/the-key-concept)

### Further resources:

- Website: [Tactical Tech Initiative](https://tacticaltech.org/)
- Podcast: [Intel Techniques by Michael Bazzell ](https://inteltechniques.com/)
