import { assertSpyCalls, spy } from "@std/testing/mock";
import { FakeTime } from "@std/testing/time";

function secondInterval(cb: () => void): number {
  return setInterval(cb, 1000);
}

Deno.test("secondInterval calls callback every second and stops after being cleared", () => {
  using time = new FakeTime();

  const cb = spy();
  const intervalId = secondInterval(cb);
  assertSpyCalls(cb, 0);
  time.tick(500);
  assertSpyCalls(cb, 0);
  time.tick(500);
  assertSpyCalls(cb, 1);
  time.tick(3500);
  assertSpyCalls(cb, 4);

  clearInterval(intervalId);
  time.tick(1000);
  assertSpyCalls(cb, 4);
});
