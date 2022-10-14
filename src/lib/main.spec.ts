import test from 'ava'
import { XCaesar } from "./main";

test("Should encrypt `Hello, world!` with shift of 0", t => {
    const caesar = XCaesar({ shift: 0 })
    const message = "Hello, World!"
    t.is(caesar.encrypt(message), message)
})

test("Should encrypt and decrypt `Hello, world!` with shift of 5", t => {
    const caesar = XCaesar({ shift: 5 })
    const message = "Hello, World!"
    const encryptedMessage = caesar.encrypt(message)
    const decryptedMessage = caesar.decrypt(encryptedMessage)
    t.is(encryptedMessage, "Mjqqt, btwqi!")
    t.is(decryptedMessage, message)
})

test("Should encrypt and decrypt `Hello, world!` with shift of -5", t => {
    const caesar = XCaesar({ shift: -5 })
    const message = "Hello, World!"
    const encryptedMessage = caesar.encrypt(message)
    const decryptedMessage = caesar.decrypt(encryptedMessage)
    t.is(encryptedMessage, "CZggj, RjmgY!")
    t.is(decryptedMessage, message)
})

test("Should encrypt and decrypt `Hello, world!` with shift of -34565", t => {
    const caesar = XCaesar({ shift: -5 })
    const message = "Hello, World!"
    const encryptedMessage = caesar.encrypt(message)
    const decryptedMessage = caesar.decrypt(encryptedMessage)
    t.is(decryptedMessage, message)
})

test("Should `Hello, world!` shifted by x equal to same message when cipher shifted by -x", t => {
    const x = 1304958
    const encryptor = XCaesar({ shift: x })
    const decryptor = XCaesar({ shift: -x })
    const message = "Hello, World!"
    const encryptedMessage = encryptor.encrypt(message)
    const decryptedMessage = decryptor.encrypt(encryptedMessage)
    t.is(decryptedMessage, message)
})
