const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const subFlow = createFlow([() => delay(1000).then(() => log("c"))]);

createFlow([
  () => log("a"),
  () => log("b"),
  subFlow,
  [() => delay(1000).then(() => log("d")), () => log("e")],
]).run(() => {
  console.log("done");
});

function createFlow(arg) {
  function run(fn) {
    arg.reduce((cur, target) => {
      if (Array.isArray(cur)) {
        return target.then(createFlow(cur).run)
      } else if (cur.run) {
        return target.then(cur.run)
      } else if (typeof cur === 'function') {
        return target.then(cur)
      }
    }, Promise.resolve()).then(fn)
  }

  return {
    run
  }
}