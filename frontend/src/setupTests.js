// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();


import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

jest.mock("firebase/auth", () => ({
    getAuth: jest.fn(() => ({
        currentUser: { uid: "test-user", email: "test@example.com" },
    })),
    setPersistence: jest.fn(() => Promise.resolve()), // Mock setPersistence function
    browserLocalPersistence: "browserLocalPersistence", // Mock persistence type
    onAuthStateChanged: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signOut: jest.fn(),
}));

