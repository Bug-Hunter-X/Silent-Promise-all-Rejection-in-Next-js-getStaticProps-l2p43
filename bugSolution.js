The solution is to wrap the `Promise.all` call within a `try...catch` block to handle any rejections gracefully, providing more informative error messages or fallback mechanisms.  Alternatively, add `.catch()` to each promise. The improved code ensures errors are caught and handled appropriately, preventing silent failures:

```javascript
// pages/index.js
export async function getStaticProps() {
  const promises = [1, 2, 3].map(async (i) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (i === 2) {
          reject(new Error('Intentional Error'));
        } else {
          resolve(i * 2);
        }
      }, 500);
    });
  });

  try {
    const results = await Promise.all(promises);
    return {
      props: {
        results,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        error: error.message,
      },
    };
  }
}

function Home({ results, error }) {
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      <h1>Results: {JSON.stringify(results)}</h1>
    </>
  );
}
export default Home; 
```
This revised code will now catch the error and display a user-friendly error message instead of a silent failure.