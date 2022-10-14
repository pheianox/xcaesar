# xcaesar

The implementation of the Caesar Cipher in TypeScript

# Installation
```bash
npm install xcaesar
```

# Usage
```ts
import { XCaesar } from 'xcaesar';

const ceaserCipher = XCaesar({ shift: 5 });

const originalMessage = 'Hello, world! It is me!';
console.log('Original Message: ' + originalMessage);

const encryptedMessage = ceaserCipher.encrypt(originalMessage);
console.log('Encrypted Message: ' + encryptedMessage);

const decryptedMessage = ceaserCipher.decrypt(encryptedMessage);
console.log('Decrypted Message: ' + decryptedMessage);
```

# Api
```ts
interface XCaesarOptions {
    shift: number
    alphabet?: string // default is abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
}

interface XCaesar {
    encrypt: (plainText: string) => string
    decrypt: (cipherText: string) => string
    shift: number
    alphabet: {
        original: string
        shifted: string
    }
}
```
