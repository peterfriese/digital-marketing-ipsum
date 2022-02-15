/// <reference path="../../typescript/typings.d.ts" />
interface Opts {
    paragraphs?: number;
    sentenceMin?: number;
    sentenceMax?: number;
}
export declare const generateIpsum: (opts: Opts) => string;
export {};
