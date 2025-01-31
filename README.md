# Silent Promise.all Rejection in Next.js getStaticProps

This repository demonstrates a subtle bug in Next.js where a rejection within `Promise.all` inside `getStaticProps` can lead to a silent failure, resulting in a blank page or a generic error without informative details.

## Bug Description

When using `Promise.all` within `getStaticProps` to fetch data asynchronously, if one of the promises rejects, the entire function might fail without throwing a catchable error. This makes debugging difficult.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the blank page or generic Next.js error.

## Solution

The solution involves explicitly handling the potential rejections using a `try...catch` block around the `Promise.all` call or using `.catch()` method on promises.