(() => {
  "use strict";
  const e = () => {
    let e = !1;
    const t = [],
      r = [];
    return {
      placeShip: (e, t, a, s) => {
        const o = ((e, t, r, a) => {
          let s = t,
            o = r;
          const l = [];
          for (let t = 0; t < e; t += 1) {
            let e = `${s},${o}`;
            l.push(e),
              "vertical" === a
                ? (e = `${s},${(o += 1)}`)
                : "horizontal" === a && (e = `${(s += 1)},${o}`);
          }
          let n = 0;
          return {
            length: e,
            shipsCoordinatesArray: l,
            hits: n,
            hit: () => ((n += 1), n),
            position: a,
            isSunk: (e, t) => e <= t,
            sunkStatus: !1,
          };
        })(e, t, a, s);
        return r.push(o), r;
      },
      receiveAttack: (e, a) => {
        let s = !1,
          o = "";
        const l = `${e},${a}`;
        return t.includes(l)
          ? "Please enter coordinates not previously attacked!"
          : (r.forEach((e) => {
              e.shipsCoordinatesArray.forEach((t) =>
                !0 === s
                  ? o
                  : l !== t
                  ? ((o = "Attack Missed!"), o)
                  : ((s = !0),
                    (e.hits = e.hit()),
                    (e.sunkStatus = e.isSunk(e.length, e.hits)),
                    (o = "Attack Landed!"),
                    o)
              );
            }),
            t.push(l),
            o);
      },
      shipArray: r,
      SquaresHit: t,
      determineIfConcluded: () => {
        let t = 0;
        return (
          r.forEach((e) => {
            !0 === e.sunkStatus && (t += 1);
          }),
          t !== r.length ? ((e = !1), e) : ((e = !0), e)
        );
      },
      areAllShipsSunk: e,
    };
  };
  (() => {
    const e = document.querySelector(".playerboard"),
      t = document.createElement("div");
    t.classList.add("playerboard"), e.appendChild(t);
    for (let e = 9; e >= -1; e -= 1) {
      const r = document.createElement("div");
      if ((r.classList.add("row"), -1 === e))
        for (let e = -1; e < 10; e += 1)
          if (-1 === e) {
            const e = document.createElement("div");
            e.classList.add("squarelabel"), r.appendChild(e);
          } else {
            const t = document.createElement("div");
            t.classList.add("squarelabel"),
              (t.textContent = `${e}`),
              r.appendChild(t);
          }
      else
        for (let t = -1; t < 10; t += 1)
          if (-1 === t) {
            const t = document.createElement("div");
            t.classList.add("squarelabel"),
              (t.textContent = `${e}`),
              r.appendChild(t);
          } else {
            const a = document.createElement("div");
            a.classList.add("playersquare"),
              a.setAttribute("id", `${t},${e}`),
              r.appendChild(a);
          }
      t.appendChild(r);
    }
  })();
  const t = e();
  (() => {
    const e = document.querySelector(".computerboard"),
      t = document.createElement("div");
    t.classList.add("playerboard"), e.appendChild(t);
    for (let e = 9; e >= -1; e -= 1) {
      const r = document.createElement("div");
      if ((r.classList.add("row"), -1 === e))
        for (let e = -1; e < 10; e += 1)
          if (-1 === e) {
            const e = document.createElement("div");
            e.classList.add("squarelabel"), r.appendChild(e);
          } else {
            const t = document.createElement("div");
            t.classList.add("squarelabel"),
              (t.textContent = `${e}`),
              r.appendChild(t);
          }
      else
        for (let t = -1; t < 10; t += 1)
          if (-1 === t) {
            const t = document.createElement("div");
            t.classList.add("squarelabel"),
              (t.textContent = `${e}`),
              r.appendChild(t);
          } else {
            const a = document.createElement("div");
            a.classList.add("square"),
              a.setAttribute("id", `${t},${e}`),
              r.appendChild(a);
          }
      t.appendChild(r);
    }
  })();
  const r = e(),
    a = document.querySelector(".start"),
    s = document.querySelector(".reset"),
    o = document.querySelector(".result"),
    l = document.querySelector(".prevhitcoord"),
    n = document.querySelectorAll(".square"),
    i = () => {
      for (let e = 1; e < 7; e += 1)
        if (6 === r.shipArray.length) e = 8;
        else {
          e = r.shipArray.length + 1;
          const t = Math.floor(Math.random() * (10 - e)),
            a = Math.floor(Math.random() * (10 - e)),
            s = Math.floor(2 * Math.random());
          let o;
          1 === s ? (o = "vertical") : 0 === s && (o = "horizontal");
          let l = !1;
          r.shipArray.forEach((r) => {
            r.shipsCoordinatesArray.forEach((r) => {
              for (let s = 0; s < e; s += 1)
                "vertical" === o
                  ? r === `${t},${a + s}` && (l = !0)
                  : "horizontal" === o && r === `${t + s},${a}` && (l = !0);
              return e;
            });
          }),
            !0 === l
              ? (console.log("no ship created today!"), (e -= 1))
              : (console.log("another ship placed"), r.placeShip(e, t, a, o));
        }
    };
  i(),
    console.log(r.shipArray),
    document.querySelector(".secret").addEventListener("click", () => {
      n.forEach((e) => {
        for (let t = 0; t < r.shipArray.length; t += 1)
          r.shipArray[t].shipsCoordinatesArray.forEach((t) => {
            t === e.id && (e.classList.add("blue"), console.log("worked"));
          });
      });
    }),
    (() => {
      let e = 0;
      document.querySelectorAll(".ship").forEach((e) => {
        e.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("shipgrabbed", e.target.id);
          const t = e.target.childElementCount;
          e.dataTransfer.setData("stringlen", t),
            e.dataTransfer.setData("xoff", e.offsetX),
            e.dataTransfer.setData("yoff", e.offsetY),
            e.target.classList.contains("vertical")
              ? e.dataTransfer.setData("pos", "vertical")
              : e.target.classList.contains("horizontal") &&
                e.dataTransfer.setData("pos", "horizontal");
        });
      });
      const r = document.querySelectorAll(".playersquare");
      r.forEach((s) => {
        s.addEventListener("dragover", (e) => {
          e.preventDefault();
        }),
          s.addEventListener("drop", (s) => {
            s.preventDefault();
            const o = s.dataTransfer.getData("stringlen"),
              l = s.dataTransfer.getData("xoff"),
              n = s.dataTransfer.getData("yoff"),
              i = s.dataTransfer.getData("pos"),
              c = parseInt(o, 10);
            let d = 0,
              h = 0;
            if ("vertical" === i) {
              d = 0;
              const e = Math.ceil(n / 34);
              h = c - e;
            } else "horizontal" === i && ((d = Math.floor(l / 34)), (h = 0));
            const u = s.target.id.split(","),
              p = parseInt(u[0], 10) - d,
              f = parseInt(u[1], 10) - h;
            if (
              (console.log(`Final coords to create object are: ${p}, ${f}`),
              ("vertical" === i && f + c > 10) || ("vertical" === i && f < 0))
            )
              console.log("y above 10 or below 0");
            else if (
              ("horizontal" === i && p + c > 10) ||
              ("horizontal" === i && p < 0)
            )
              console.log("x above 10 or below 0");
            else {
              let o = !1;
              if (
                (t.shipArray.forEach((e) => {
                  e.shipsCoordinatesArray.forEach((e) => {
                    for (let t = 0; t < c; t += 1)
                      "vertical" === i
                        ? e === `${p},${f + t}` && (o = !0)
                        : "horizontal" === i &&
                          e === `${p + t},${f}` &&
                          (o = !0);
                  });
                }),
                !0 === o)
              )
                console.log("no ship created today!");
              else {
                t.placeShip(c, p, f, i),
                  console.log(t.shipArray),
                  (document.getElementById(
                    s.dataTransfer.getData("shipgrabbed")
                  ).style.visibility = "hidden"),
                  (e += 1),
                  6 === e && ((e = 0), (a.disabled = !1));
                const o = t.shipArray.length - 1,
                  l = t.shipArray[o];
                r.forEach((e) => {
                  for (let t = 0; t < l.shipsCoordinatesArray.length; t += 1)
                    e.id === l.shipsCoordinatesArray[t] &&
                      e.classList.add("blue");
                });
              }
            }
          });
      });
    })();
  const c = () => {
      const e = document.querySelector(".computerguess"),
        r = Math.floor(10 * Math.random()),
        a = Math.floor(10 * Math.random()),
        s = `${r},${a}`;
      t.SquaresHit.includes(s)
        ? (console.log("computer already guessed this, trying again"), c())
        : (t.receiveAttack(r, a),
          document.querySelectorAll(".playersquare").forEach((r) => {
            let a = 0;
            if (r.id === s)
              for (let s = 0; s < t.shipArray.length; s += 1)
                for (
                  let o = 0;
                  o < t.shipArray[s].shipsCoordinatesArray.length;
                  o += 1
                )
                  if (r.id !== t.shipArray[s].shipsCoordinatesArray[o])
                    (a = t.SquaresHit.length),
                      (e.textContent = `Missed: ${t.SquaresHit[a - 1]}`),
                      r.classList.add("failedhit");
                  else if (r.id === t.shipArray[s].shipsCoordinatesArray[o])
                    return (
                      (a = t.SquaresHit.length),
                      (e.textContent = `Hit: ${t.SquaresHit[a - 1]}`),
                      void r.classList.add("successfulhit")
                    );
          }));
    },
    d = (e) => {
      console.log(e.target);
      const a = e.target,
        s = e.target.id.split(","),
        i = s[0],
        h = s[1];
      let u = 0;
      (l.textContent = r.receiveAttack(i, h)),
        "Please enter coordinates not previously attacked!" !== l.textContent &&
          ("Attack Missed!" === l.textContent
            ? ((u = r.SquaresHit.length),
              (o.textContent = `Missed: ${r.SquaresHit[u - 1]}`),
              (o.style.color = "red"),
              a.classList.add("failedhit"))
            : "Attack Landed!" === l.textContent &&
              ((u = r.SquaresHit.length),
              (o.textContent = `Hit: ${r.SquaresHit[u - 1]}`),
              (o.style.color = "green"),
              a.classList.add("successfulhit")),
          !0 === r.determineIfConcluded()
            ? ((o.textContent = "Game Over! Player 1 wins!"),
              (o.style.color = "green"),
              n.forEach((e) => {
                e.removeEventListener("click", d);
              }))
            : (c(),
              !0 === t.determineIfConcluded() &&
                ((o.textContent = "Game Over! Computer wins!"),
                (o.style.color = "red"),
                n.forEach((e) => {
                  e.removeEventListener("click", d);
                }))));
    };
  a.addEventListener("click", () => {
    (a.disabled = !0),
      n.forEach((e) => {
        e.addEventListener("click", d);
      });
  }),
    s.addEventListener("click", () => {
      document.querySelectorAll(".playersquare").forEach((e) => {
        e.classList.remove("successfulhit"),
          e.classList.remove("failedhit"),
          e.classList.remove("blue");
      }),
        n.forEach((e) => {
          e.removeEventListener("click", d),
            e.classList.remove("successfulhit"),
            e.classList.remove("failedhit"),
            e.classList.remove("blue");
        }),
        (l.textContent = ""),
        (o.textContent = ""),
        (document.querySelector(".computerguess").textContent =
          "Computer's Guess: "),
        (a.disabled = !0),
        t.shipArray.splice(0, t.shipArray.length),
        t.SquaresHit.splice(0, t.SquaresHit.length),
        r.shipArray.splice(0, r.shipArray.length),
        r.SquaresHit.splice(0, r.SquaresHit.length),
        (t.areAllShipsSunk = !1),
        (r.areAllShipsSunk = !1),
        document.querySelectorAll(".ship").forEach((e) => {
          e.style.visibility = "visible";
        }),
        i(),
        console.log(r.shipArray);
    });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xDN0IsU0FBUUMsSUFDZkEsRUFBS3lFLE1BQU1DLFdBQWEsU0FBUyxJQUVuQzdDLElBQ0FVLFFBQVFDLElBQUlsQixFQUFjaEQsVUFBVSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGVzaWduLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2hpcCA9IChsZW5ndGgsIHhjb29yZCwgeWNvb3JkLCBwb3NpdGlvbikgPT4ge1xuICBsZXQgdGVtcHggPSB4Y29vcmQ7XG4gIGxldCB0ZW1weSA9IHljb29yZDtcblxuICBjb25zdCBzaGlwc0Nvb3JkaW5hdGVzQXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGxldCBzaGlwQ29vcmRpbmF0ZXMgPSBgJHt0ZW1weH0sJHt0ZW1weX1gO1xuICAgIHNoaXBzQ29vcmRpbmF0ZXNBcnJheS5wdXNoKHNoaXBDb29yZGluYXRlcyk7XG5cbiAgICBpZiAocG9zaXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgc2hpcENvb3JkaW5hdGVzID0gYCR7dGVtcHh9LCR7KHRlbXB5ICs9IDEpfWA7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIHNoaXBDb29yZGluYXRlcyA9IGAkeyh0ZW1weCArPSAxKX0sJHt0ZW1weX1gO1xuICAgIH1cbiAgfVxuXG4gIGxldCBoaXRzID0gMDtcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdHMgKz0gMTtcbiAgICAvLyBjb25zb2xlLmxvZyhoaXRzKTtcbiAgICByZXR1cm4gaGl0cztcbiAgfTtcblxuICBjb25zdCBzdW5rU3RhdHVzID0gZmFsc2U7XG4gIGNvbnN0IGlzU3VuayA9IChsZW5ndGhPZlNoaXAsIGhpdHNPZlNoaXApID0+IHtcbiAgICBpZiAobGVuZ3RoT2ZTaGlwIDw9IGhpdHNPZlNoaXApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgc2hpcHNDb29yZGluYXRlc0FycmF5LFxuICAgIGhpdHMsXG4gICAgaGl0LFxuICAgIHBvc2l0aW9uLFxuICAgIGlzU3VuayxcbiAgICBzdW5rU3RhdHVzLFxuICB9O1xufTtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBsZXQgYXJlQWxsU2hpcHNTdW5rID0gZmFsc2U7XG4gIGNvbnN0IFNxdWFyZXNIaXQgPSBbXTtcbiAgY29uc3Qgc2hpcEFycmF5ID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGxlbmd0aCwgeGNvb3JkLCB5Y29vcmQsIHBvc2l0aW9uKSA9PiB7XG4gICAgXG4gICAgICAvLyBTT01FSFdFUkUgSEVSRSBBREQgVkFMSURBVElPTiA9IEdPSU5HIFRIUk9VR0ggQUxMIFRIRSBDT09SRFMgT0YgVEhFIFBSRVZJT1VTIFNISVBTIEFORCBDSEVDS0lORyBUSEVZIERPTlQgRVFVQUwgRUFDSCBPVEhFUi5cbiAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKGxlbmd0aCwgeGNvb3JkLCB5Y29vcmQsIHBvc2l0aW9uKTtcbiAgICAgIHNoaXBBcnJheS5wdXNoKG5ld1NoaXApO1xuICAgICAgcmV0dXJuIHNoaXBBcnJheTtcbiAgXG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4Y29vcmQsIHljb29yZCkgPT4ge1xuICAgIGxldCB3YXNIaXQgPSBmYWxzZTtcbiAgICBsZXQgbWVzc2FnZSA9IFwiXCI7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBgJHt4Y29vcmR9LCR7eWNvb3JkfWA7XG4gICAgaWYgKFNxdWFyZXNIaXQuaW5jbHVkZXMoY29vcmRpbmF0ZXMpKSB7XG4gICAgICByZXR1cm4gXCJQbGVhc2UgZW50ZXIgY29vcmRpbmF0ZXMgbm90IHByZXZpb3VzbHkgYXR0YWNrZWQhXCI7XG4gICAgfVxuICAgIHNoaXBBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLnNoaXBzQ29vcmRpbmF0ZXNBcnJheS5mb3JFYWNoKChzZWxlY3RlZFNoaXBDb29yZGluYXRlcykgPT4ge1xuICAgICAgICBpZiAod2FzSGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29vcmRpbmF0ZXMgPT09IHNlbGVjdGVkU2hpcENvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXNzYWdlID0gXCJBdHRhY2sgTWlzc2VkIVwiO1xuICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIHdhc0hpdCA9IHRydWU7XG4gICAgICAgIHNoaXAuaGl0cyA9IHNoaXAuaGl0KCk7XG4gICAgICAgIHNoaXAuc3Vua1N0YXR1cyA9IHNoaXAuaXNTdW5rKHNoaXAubGVuZ3RoLCBzaGlwLmhpdHMpO1xuICAgICAgICBtZXNzYWdlID0gXCJBdHRhY2sgTGFuZGVkIVwiO1xuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFNxdWFyZXNIaXQucHVzaChjb29yZGluYXRlcyk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH07XG5cbiAgY29uc3QgZGV0ZXJtaW5lSWZDb25jbHVkZWQgPSAoKSA9PiB7XG4gICAgbGV0IHN1bmtlblNoaXBzID0gMDtcbiAgICBzaGlwQXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuc3Vua1N0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICBzdW5rZW5TaGlwcyArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1bmtlblNoaXBzID09PSBzaGlwQXJyYXkubGVuZ3RoKSB7XG4gICAgICBhcmVBbGxTaGlwc1N1bmsgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmVBbGxTaGlwc1N1bmsgPSBmYWxzZTtcbiAgICAgIHJldHVybiBhcmVBbGxTaGlwc1N1bms7XG4gICAgfVxuICAgIHJldHVybiBhcmVBbGxTaGlwc1N1bms7XG4gIH07XG5cbiAgLy8gY29uc3QgZ2FtZWJvYXJkID0gW107XG4gIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAvLyAgIGxldCByb3cgPSBbXTtcbiAgLy8gICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgLy8gICAgIGNvbnN0IHRlbXAgPSBbaSwgal07XG4gIC8vICAgICByb3cucHVzaCh0ZW1wKTtcbiAgLy8gICB9XG4gIC8vICAgZ2FtZWJvYXJkLnB1c2gocm93KTtcbiAgLy8gICByb3cgPSBbXTtcbiAgLy8gfVxuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgc2hpcEFycmF5LFxuICAgIFNxdWFyZXNIaXQsXG4gICAgZGV0ZXJtaW5lSWZDb25jbHVkZWQsXG4gICAgYXJlQWxsU2hpcHNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkfTsiLCJcblxuY29uc3QgZ2V0UGxheWVyTmFtZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBjb25zdCBuYW1lYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25maXJtbmFtZVwiKTtcbiAgICBuYW1lYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBuYW1laW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XG4gICAgICBjb25zdCBkb21wbGF5ZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJuYW1lXCIpO1xuXG4gICAgICBpZiAobmFtZWlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIG5hbWVpbnB1dC52YWx1ZSA9IFwiUGxheWVyIDFcIjtcbiAgICAgIH1cblxuICAgICAgZG9tcGxheWVybmFtZS50ZXh0Q29udGVudCA9IG5hbWVpbnB1dC52YWx1ZTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICByZXR1cm4gbmFtZWlucHV0LnZhbHVlO1xuICAgIH0pXG59XG5cbmNvbnN0IGdlbmVyYXRlUGxheWVyQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllcmJvYXJkZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJib2FyZFwiKTtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyYm9hcmRcIik7XG4gIHBsYXllcmJvYXJkZGl2LmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcblxuICBmb3IgKGxldCBpID0gOTsgaSA+PSAtMTsgaSAtPSAxKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAvLyBmb3JcbiAgICBpZiAoIGkgPT09IC0xKSB7XG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChqID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBzcXVhcmVsYWJlbC5jbGFzc0xpc3QuYWRkKFwic3F1YXJlbGFiZWxcIik7XG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZWxhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzcXVhcmVsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgc3F1YXJlbGFiZWwuY2xhc3NMaXN0LmFkZChcInNxdWFyZWxhYmVsXCIpO1xuICAgICAgICAgIHNxdWFyZWxhYmVsLnRleHRDb250ZW50ID0gYCR7an1gXG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZWxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHsgXG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChqID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBzcXVhcmVsYWJlbC5jbGFzc0xpc3QuYWRkKFwic3F1YXJlbGFiZWxcIik7XG4gICAgICAgICAgc3F1YXJlbGFiZWwudGV4dENvbnRlbnQgPSBgJHtpfWBcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc3F1YXJlbGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJzcXVhcmVcIik7XG4gICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2p9LCR7aX1gKVxuICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgLy9cbiAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG4gIFxufVxuXG5jb25zdCBnZW5lcmF0ZUNvbXB1dGVyQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVyYm9hcmRkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllcmJvYXJkXCIpO1xuICBjb21wdXRlcmJvYXJkZGl2LmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcblxuICBmb3IgKGxldCBpID0gOTsgaSA+PSAtMTsgaSAtPSAxKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAvLyBmb3JcbiAgICBpZiAoIGkgPT09IC0xKSB7XG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChqID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBzcXVhcmVsYWJlbC5jbGFzc0xpc3QuYWRkKFwic3F1YXJlbGFiZWxcIik7XG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZWxhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzcXVhcmVsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgc3F1YXJlbGFiZWwuY2xhc3NMaXN0LmFkZChcInNxdWFyZWxhYmVsXCIpO1xuICAgICAgICAgIHNxdWFyZWxhYmVsLnRleHRDb250ZW50ID0gYCR7an1gXG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZWxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHsgXG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChqID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBzcXVhcmVsYWJlbC5jbGFzc0xpc3QuYWRkKFwic3F1YXJlbGFiZWxcIik7XG4gICAgICAgICAgc3F1YXJlbGFiZWwudGV4dENvbnRlbnQgPSBgJHtpfWBcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc3F1YXJlbGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2p9LCR7aX1gKVxuICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgLy9cbiAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59XG5cblxuXG5leHBvcnQgeyBnZXRQbGF5ZXJOYW1lLCBnZW5lcmF0ZVBsYXllckJvYXJkLCBnZW5lcmF0ZUNvbXB1dGVyQm9hcmR9OyBcblxuICAvLyBmb3IgKGNvbnN0IHNxdWFyZWRyb3B6b25lIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpKSB7XG4gIC8vICAgc3F1YXJlZHJvcHpvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGUgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coZSk7XG4gIC8vICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gIC8vICAgfSlcbiAgLy8gfSIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGdldFBsYXllck5hbWUsIGdlbmVyYXRlUGxheWVyQm9hcmQsIGdlbmVyYXRlQ29tcHV0ZXJCb2FyZCB9IGZyb20gXCIuL2Rlc2lnblwiO1xuXG5cblxuLy8gR2FtZSBsb29wIGJlZ2luc1xuLy8gR2V0cyB0aGUgcGxheWVyIGFuZCBjcmVhdGVzIGJvdGggZ2FtZWJvYXJkcywgYW5kIGJvdGggb2JqZWN0cy5cbmNvbnN0IHBsYXllcnNuYW1lID0gXCJQbGF5ZXIgMVwiO1xuLy8gcGxheWVyc25hbWUgPSBnZXRQbGF5ZXJOYW1lKCk7IFxuZ2VuZXJhdGVQbGF5ZXJCb2FyZCgpO1xuY29uc3QgUGxheWVyYm9hcmQgPSBHYW1lYm9hcmQoKTtcbmdlbmVyYXRlQ29tcHV0ZXJCb2FyZCgpO1xuY29uc3QgQ29tcHV0ZXJib2FyZCA9IEdhbWVib2FyZCgpO1xuY29uc3Qgc3RhcnRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0XCIpO1xuY29uc3QgcmVzZXRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0XCIpO1xuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG5jb25zdCBwcmV2aGl0Y29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXZoaXRjb29yZFwiKTtcbmNvbnN0IGFsbGNvbXB1dGVyc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuLy8gUGxhY2luZyBTaGlwc1xuY29uc3QgZ2VuZXJhdGVDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuZm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpICs9IDEpIHtcbiAgaWYgKENvbXB1dGVyYm9hcmQuc2hpcEFycmF5Lmxlbmd0aCA9PT0gNikge1xuICAgIGkgPSA4O1xuICB9IGVsc2Uge1xuICAgIGkgPSBDb21wdXRlcmJvYXJkLnNoaXBBcnJheS5sZW5ndGggKyAxO1xuICBjb25zdCB0ZW1weGNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gaSkpO1xuICBjb25zdCB0ZW1weWNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gaSkpO1xuICBjb25zdCB0ZW1wcG9zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gIGxldCB0ZW1wcG9zaXRpb247XG4gIGlmICh0ZW1wcG9zID09PSAxKSB7XG4gICAgdGVtcHBvc2l0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xuICB9IGVsc2UgaWYgKHRlbXBwb3MgPT09IDApIHtcbiAgICB0ZW1wcG9zaXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgfVxuICBsZXQgb3ZlcmxhcHBlZHN0YXR1cyA9IGZhbHNlO1xuICBDb21wdXRlcmJvYXJkLnNoaXBBcnJheS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgIHNoaXAuc2hpcHNDb29yZGluYXRlc0FycmF5LmZvckVhY2goc2hpcGNvb3JkID0+IHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaTsgaiArPSAxKSB7XG4gICAgICAgIGlmICh0ZW1wcG9zaXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgIGlmIChzaGlwY29vcmQgPT09IChgJHt0ZW1weGNvb3JkfSwkeyh0ZW1weWNvb3JkICsgail9YCkpIHtcbiAgICAgICAgICAgIG92ZXJsYXBwZWRzdGF0dXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICggdGVtcHBvc2l0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgIGlmIChzaGlwY29vcmQgPT09IChgJHt0ZW1weGNvb3JkICsgan0sJHt0ZW1weWNvb3JkfWApKSB7XG4gICAgICAgICAgICBvdmVybGFwcGVkc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICB9XG4gICAgICByZXR1cm4gaTtcbiAgICB9KVxuICB9KVxuXG4gIGlmIChvdmVybGFwcGVkc3RhdHVzID09PSB0cnVlKSB7XG4gICAgY29uc29sZS5sb2coXCJubyBzaGlwIGNyZWF0ZWQgdG9kYXkhXCIpXG4gICAgaSAtPSAxO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwiYW5vdGhlciBzaGlwIHBsYWNlZFwiKVxuICAgIENvbXB1dGVyYm9hcmQucGxhY2VTaGlwKGksIHRlbXB4Y29vcmQsIHRlbXB5Y29vcmQsIHRlbXBwb3NpdGlvbik7XG4gIH1cbiAgLy8gZm9yIChsZXQgbCA9IDA7IGwgPCBDb21wdXRlcmJvYXJkLnNoaXBBcnJheS5sZW5ndGg7IGwgKz0gMSkge1xuICAvLyAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29tcHV0ZXJib2FyZC5zaGlwQXJyYXlbbF0uc2hpcHNDb29yZGluYXRlc0FycmF5Lmxlbmd0aDsgaiArPSAxKSB7XG4gIC8vICAgICBpZiAoQ29tcHV0ZXJib2FyZC5zaGlwQXJyYXlbbF0uc2hpcHNDb29yZGluYXRlc0FycmF5W2pdID09PSApXG4gIC8vICAgfVxuICAvLyB9XG4gIH1cbn1cblxufVxuXG5nZW5lcmF0ZUNvbXB1dGVyU2hpcHMoKTtcbmNvbnNvbGUubG9nKENvbXB1dGVyYm9hcmQuc2hpcEFycmF5KTtcblxuY29uc3QgZ2VuZXJhdGVWaXN1YWxTaGlwcyA9ICgpID0+IHtcblxuICBsZXQgc2hpcHNwbGFjZWQgPSAwO1xuXG4gIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICBcbiAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKSA9PiB7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInNoaXBncmFiYmVkXCIsIGUudGFyZ2V0LmlkKVxuICAgIGNvbnN0IHRlbXBsZW5ndGggPSBlLnRhcmdldC5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic3RyaW5nbGVuXCIsIHRlbXBsZW5ndGgpO1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ4b2ZmXCIsIGUub2Zmc2V0WCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInlvZmZcIiwgZS5vZmZzZXRZKTtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIikpIHtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJwb3NcIiwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhvcml6b250YWxcIikpIHtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJwb3NcIiwgXCJob3Jpem9udGFsXCIpO1xuICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGFsbHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllcnNxdWFyZVwiKTtcbiAgYWxsc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBzdHJpbmdsZW4gPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic3RyaW5nbGVuXCIpO1xuICAgICAgY29uc3QgeG9mZiA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ4b2ZmXCIpO1xuICAgICAgY29uc3QgeW9mZiA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ5b2ZmXCIpO1xuICAgICAgY29uc3QgcG9zID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInBvc1wiKTtcblxuICAgICAgY29uc3QgbGVuID0gcGFyc2VJbnQoc3RyaW5nbGVuLCAxMCk7XG4gICAgICBsZXQgb2Zmc2V0WFNxdWFyZSA9IDA7XG4gICAgICBsZXQgb2Zmc2V0WVNxdWFyZSA9IDA7XG4gICAgICBpZiAocG9zID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgb2Zmc2V0WFNxdWFyZSA9IDA7XG4gICAgICAgIGNvbnN0IHRlbXBvT2Zmc2V0WVNxdWFyZSA9IE1hdGguY2VpbCh5b2ZmIC8gMzQpO1xuICAgICAgICBvZmZzZXRZU3F1YXJlID0gbGVuIC0gdGVtcG9PZmZzZXRZU3F1YXJlO1xuICAgICAgfSBlbHNlIGlmIChwb3MgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIG9mZnNldFhTcXVhcmUgPSBNYXRoLmZsb29yKHhvZmYgLyAzNCk7XG4gICAgICAgIG9mZnNldFlTcXVhcmUgPSAwO1xuICAgICAgfSBcblxuICAgICAgXG4gICAgICBjb25zdCBzdHJpbmdjb29yZCA9IGUudGFyZ2V0LmlkO1xuICAgICAgY29uc3QgY29vcmRhcnJyYXkgPSBzdHJpbmdjb29yZC5zcGxpdChcIixcIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhjb29yZGFycnJheSk7XG5cbiAgICAgIGNvbnN0IGZpbmFseGNvb3JkID0gKHBhcnNlSW50KGNvb3JkYXJycmF5WzBdLCAxMCkpIC0gb2Zmc2V0WFNxdWFyZTtcbiAgICAgIGNvbnN0IGZpbmFseWNvb3JkID0gKHBhcnNlSW50KGNvb3JkYXJycmF5WzFdLCAxMCkpIC0gb2Zmc2V0WVNxdWFyZTtcblxuICAgICAgY29uc29sZS5sb2coYEZpbmFsIGNvb3JkcyB0byBjcmVhdGUgb2JqZWN0IGFyZTogJHtmaW5hbHhjb29yZH0sICR7ZmluYWx5Y29vcmR9YCk7XG5cbiAgICAgIC8vIHZhbGlkYXRlIG9iamVjdCBiZWZvcmUgY3JlYXRpb25cbiAgICAgIGlmIChwb3MgPT09IFwidmVydGljYWxcIiAmJiBmaW5hbHljb29yZCArIGxlbiA+IDEwIHx8IHBvcyA9PT0gXCJ2ZXJ0aWNhbFwiICYmIGZpbmFseWNvb3JkIDwgMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInkgYWJvdmUgMTAgb3IgYmVsb3cgMFwiKVxuICAgICAgfSBlbHNlIGlmIChwb3MgPT09IFwiaG9yaXpvbnRhbFwiICYmIGZpbmFseGNvb3JkICsgbGVuID4gMTAgfHwgcG9zID09PSBcImhvcml6b250YWxcIiAmJiBmaW5hbHhjb29yZCA8IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ4IGFib3ZlIDEwIG9yIGJlbG93IDBcIilcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgbGV0IG92ZXJsYXBwZWRzdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgUGxheWVyYm9hcmQuc2hpcEFycmF5LmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgc2hpcC5zaGlwc0Nvb3JkaW5hdGVzQXJyYXkuZm9yRWFjaChzaGlwY29vcmQgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGogKz0gMSkge1xuICAgICAgICAgICAgICBpZiAocG9zID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcGNvb3JkID09PSAoYCR7ZmluYWx4Y29vcmR9LCR7KGZpbmFseWNvb3JkICsgail9YCkpIHtcbiAgICAgICAgICAgICAgICAgIG92ZXJsYXBwZWRzdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwb3MgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBjb29yZCA9PT0gKGAke2ZpbmFseGNvb3JkICsgan0sJHtmaW5hbHljb29yZH1gKSkge1xuICAgICAgICAgICAgICAgICAgb3ZlcmxhcHBlZHN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICBcbiAgICAgICAgaWYgKG92ZXJsYXBwZWRzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHNoaXAgY3JlYXRlZCB0b2RheSFcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBQbGF5ZXJib2FyZC5wbGFjZVNoaXAobGVuLCBmaW5hbHhjb29yZCwgZmluYWx5Y29vcmQsIHBvcyk7XG4gICAgICAgICAgY29uc29sZS5sb2coUGxheWVyYm9hcmQuc2hpcEFycmF5KVxuICAgICAgICBjb25zdCBzaGlwZ3JhYmJlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzaGlwZ3JhYmJlZFwiKSlcbiAgICAgICAgc2hpcGdyYWJiZWQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHNoaXBzcGxhY2VkICs9IDE7XG4gICAgICAgIGlmIChzaGlwc3BsYWNlZCA9PT0gNikge1xuICAgICAgICAgIHNoaXBzcGxhY2VkID0gMDtcbiAgICAgICAgICBzdGFydGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IFBsYXllcmJvYXJkLnNoaXBBcnJheS5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBsYXN0U2hpcCA9IFBsYXllcmJvYXJkLnNoaXBBcnJheVtsYXN0SW5kZXhdO1xuICAgICAgICBhbGxzcXVhcmVzLmZvckVhY2goc3F1YXIgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdFNoaXAuc2hpcHNDb29yZGluYXRlc0FycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoc3F1YXIuaWQgPT09IGxhc3RTaGlwLnNoaXBzQ29vcmRpbmF0ZXNBcnJheVtpXSkge1xuICAgICAgICAgICAgICBzcXVhci5jbGFzc0xpc3QuYWRkKFwiYmx1ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IFxuICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbmNvbnN0IHNlY3JldGZ1bmN0aW9uID0gKCkgPT4geyAgXG4gICAgYWxsY29tcHV0ZXJzcXVhcmVzLmZvckVhY2goY29tcHV0ZXJzcXVhcmUgPT4ge1xuICBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29tcHV0ZXJib2FyZC5zaGlwQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgQ29tcHV0ZXJib2FyZC5zaGlwQXJyYXlbaV0uc2hpcHNDb29yZGluYXRlc0FycmF5LmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgIGlmIChhcnJheSA9PT0gY29tcHV0ZXJzcXVhcmUuaWQpIHtcbiAgICAgICAgICAgIGNvbXB1dGVyc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJibHVlXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JrZWRcIilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG5jb25zdCBzZWNyZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3JldFwiKTtcbnNlY3JldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VjcmV0ZnVuY3Rpb24pXG5cblxuXG5nZW5lcmF0ZVZpc3VhbFNoaXBzKCk7XG5cbi8vIGNyZWF0ZSBhIHJlc2V0IGJ1dHRvbiBmb3IgYWxsIHNoaXBzXG5jb25zdCBjb21wdXRlck1vdmUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVyZ3Vlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyZ3Vlc3NcIilcbiAgY29uc3QgdGVtcHhjb29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCkpO1xuICBjb25zdCB0ZW1weWNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwKSk7XG4gIGNvbnN0IGNvb3JkID0gYCR7dGVtcHhjb29yZH0sJHt0ZW1weWNvb3JkfWA7XG4gIGlmIChQbGF5ZXJib2FyZC5TcXVhcmVzSGl0LmluY2x1ZGVzKGNvb3JkKSkge1xuICAgIGNvbnNvbGUubG9nKFwiY29tcHV0ZXIgYWxyZWFkeSBndWVzc2VkIHRoaXMsIHRyeWluZyBhZ2FpblwiKTtcbiAgICBjb21wdXRlck1vdmUoKTtcbiAgICBcbiAgfSBlbHNlIHtcbiAgICBQbGF5ZXJib2FyZC5yZWNlaXZlQXR0YWNrKHRlbXB4Y29vcmQsIHRlbXB5Y29vcmQpO1xuICAgIGNvbnN0IGFsbHBsYXllcnNzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXJzcXVhcmVcIik7XG4gICAgYWxscGxheWVyc3NxdWFyZXMuZm9yRWFjaChwbGF5ZXJzcXVhcmUgPT4ge1xuICAgICAgbGV0IHRlbXBlbmRvZmFycmF5ID0gMDtcbiAgICAgIGlmIChwbGF5ZXJzcXVhcmUuaWQgPT09IGNvb3JkKSB7XG4gICAgICAgIC8vIExPT1AgVEhST1VHSCBcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFBsYXllcmJvYXJkLnNoaXBBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBQbGF5ZXJib2FyZC5zaGlwQXJyYXlbaV0uc2hpcHNDb29yZGluYXRlc0FycmF5Lmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAocGxheWVyc3F1YXJlLmlkICE9PSBQbGF5ZXJib2FyZC5zaGlwQXJyYXlbaV0uc2hpcHNDb29yZGluYXRlc0FycmF5W2pdKSB7XG4gICAgICAgICAgICAgICAgdGVtcGVuZG9mYXJyYXkgPSBQbGF5ZXJib2FyZC5TcXVhcmVzSGl0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb21wdXRlcmd1ZXNzLnRleHRDb250ZW50ID0gYE1pc3NlZDogJHtQbGF5ZXJib2FyZC5TcXVhcmVzSGl0W3RlbXBlbmRvZmFycmF5IC0gMV19YFxuICAgICAgICAgICAgICAgIHBsYXllcnNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiZmFpbGVkaGl0XCIpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllcnNxdWFyZS5pZCA9PT0gUGxheWVyYm9hcmQuc2hpcEFycmF5W2ldLnNoaXBzQ29vcmRpbmF0ZXNBcnJheVtqXSkge1xuICAgICAgICAgICAgICAgIHRlbXBlbmRvZmFycmF5ID0gUGxheWVyYm9hcmQuU3F1YXJlc0hpdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29tcHV0ZXJndWVzcy50ZXh0Q29udGVudCA9IGBIaXQ6ICR7UGxheWVyYm9hcmQuU3F1YXJlc0hpdFt0ZW1wZW5kb2ZhcnJheSAtIDFdfWBcbiAgICAgICAgICAgICAgICBwbGF5ZXJzcXVhcmUuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3NmdWxoaXRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSlcbiAgfVxufVxuICBcbmNvbnN0IHBsYXllck1vdmUgPSAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gIGNvbnN0IGNvbXB1dGVyc3F1YXJlID0gZS50YXJnZXQ7XG4gIGNvbnN0IGNvbXB1dGVyU3F1YXJlQ2xpY2tlZENvb3Jkc1N0cmluZyA9IGUudGFyZ2V0LmlkO1xuICBjb25zdCBjb21wdXRlclNxdWFyZUNsaWNrZWRDb29yZHNBcnJheSA9IGNvbXB1dGVyU3F1YXJlQ2xpY2tlZENvb3Jkc1N0cmluZy5zcGxpdChcIixcIik7XG4gIGNvbnN0IENsaWNrZWRDb29yZFggPSBjb21wdXRlclNxdWFyZUNsaWNrZWRDb29yZHNBcnJheVswXTtcbiAgY29uc3QgQ2xpY2tlZENvb3JkWSA9IGNvbXB1dGVyU3F1YXJlQ2xpY2tlZENvb3Jkc0FycmF5WzFdOyAgIFxuICBsZXQgdGVtcGVuZG9mYXJyYXkgPSAwO1xuICBwcmV2aGl0Y29vcmQudGV4dENvbnRlbnQgPSBDb21wdXRlcmJvYXJkLnJlY2VpdmVBdHRhY2soQ2xpY2tlZENvb3JkWCwgQ2xpY2tlZENvb3JkWSk7XG5cbiAgaWYgKHByZXZoaXRjb29yZC50ZXh0Q29udGVudCA9PT0gXCJQbGVhc2UgZW50ZXIgY29vcmRpbmF0ZXMgbm90IHByZXZpb3VzbHkgYXR0YWNrZWQhXCIpIHtcbiAgICByZXR1cm47XG4gIH0gaWYgKHByZXZoaXRjb29yZC50ZXh0Q29udGVudCA9PT0gXCJBdHRhY2sgTWlzc2VkIVwiKSB7XG4gICAgdGVtcGVuZG9mYXJyYXkgPSBDb21wdXRlcmJvYXJkLlNxdWFyZXNIaXQubGVuZ3RoO1xuICAgIHJlc3VsdC50ZXh0Q29udGVudCA9IGBNaXNzZWQ6ICR7Q29tcHV0ZXJib2FyZC5TcXVhcmVzSGl0W3RlbXBlbmRvZmFycmF5IC0gMV19YFxuICAgIHJlc3VsdC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgY29tcHV0ZXJzcXVhcmUuY2xhc3NMaXN0LmFkZChcImZhaWxlZGhpdFwiKTtcbiAgfSBlbHNlIGlmIChwcmV2aGl0Y29vcmQudGV4dENvbnRlbnQgPT09IFwiQXR0YWNrIExhbmRlZCFcIikge1xuICAgIHRlbXBlbmRvZmFycmF5ID0gQ29tcHV0ZXJib2FyZC5TcXVhcmVzSGl0Lmxlbmd0aDtcbiAgICByZXN1bHQudGV4dENvbnRlbnQgPSBgSGl0OiAke0NvbXB1dGVyYm9hcmQuU3F1YXJlc0hpdFt0ZW1wZW5kb2ZhcnJheSAtIDFdfWBcbiAgICByZXN1bHQuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgY29tcHV0ZXJzcXVhcmUuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3NmdWxoaXRcIik7XG4gIH1cblxuICBjb25zdCBpc092ZXIgPSBDb21wdXRlcmJvYXJkLmRldGVybWluZUlmQ29uY2x1ZGVkKCk7XG4gIGlmIChpc092ZXIgPT09IHRydWUpIHtcbiAgcmVzdWx0LnRleHRDb250ZW50ID0gYEdhbWUgT3ZlciEgJHtwbGF5ZXJzbmFtZX0gd2lucyFgXG4gIHJlc3VsdC5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgYWxsY29tcHV0ZXJzcXVhcmVzLmZvckVhY2goY29tcHV0ZXJzcXVhcmVzID0+IHtcbiAgICBjb21wdXRlcnNxdWFyZXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXllck1vdmUpO1xuICB9KVxuICB9IGVsc2Uge1xuICAgIGNvbXB1dGVyTW92ZSgpO1xuICBjb25zdCBpc092ZXIxID0gUGxheWVyYm9hcmQuZGV0ZXJtaW5lSWZDb25jbHVkZWQoKTtcbiAgaWYgKGlzT3ZlcjEgPT09IHRydWUpIHtcbiAgcmVzdWx0LnRleHRDb250ZW50ID0gYEdhbWUgT3ZlciEgQ29tcHV0ZXIgd2lucyFgXG4gIHJlc3VsdC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gIGFsbGNvbXB1dGVyc3F1YXJlcy5mb3JFYWNoKGNvbXB1dGVyc3F1YXJlcyA9PiB7XG4gICAgY29tcHV0ZXJzcXVhcmVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5ZXJNb3ZlKTtcbiAgfSlcbiAgfVxuICB9XG5cblxuXG59XG5cbi8vIGdhbWUgbG9vcCBub3chXG5jb25zdCBnYW1lTG9vcCA9ICgpID0+IHtcbiAgc3RhcnRidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gIGFsbGNvbXB1dGVyc3F1YXJlcy5mb3JFYWNoKGNvbXB1dGVyc3F1YXJlID0+IHtcbiAgICBjb21wdXRlcnNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheWVyTW92ZSlcbiAgfSlcbn1cblxuXG5jb25zdCByZXNldEJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgYWxscGxheWVyc3NxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllcnNxdWFyZVwiKTtcblxuICBhbGxwbGF5ZXJzc3F1YXJlcy5mb3JFYWNoKHBsYXllcnNxdWFyZSA9PiB7XG4gICAgcGxheWVyc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJzdWNjZXNzZnVsaGl0XCIpO1xuICAgIHBsYXllcnNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFpbGVkaGl0XCIpO1xuICAgIHBsYXllcnNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ZVwiKTtcblxuICB9KVxuXG4gIGFsbGNvbXB1dGVyc3F1YXJlcy5mb3JFYWNoKGNvbXB1dGVyc3F1YXJlID0+IHtcbiAgICBjb21wdXRlcnNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheWVyTW92ZSk7XG4gICAgY29tcHV0ZXJzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInN1Y2Nlc3NmdWxoaXRcIik7XG4gICAgY29tcHV0ZXJzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcImZhaWxlZGhpdFwiKTtcbiAgICBjb21wdXRlcnNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ZVwiKTtcbiAgfSlcblxuICBwcmV2aGl0Y29vcmQudGV4dENvbnRlbnQgPSBcIlwiO1xuICByZXN1bHQudGV4dENvbnRlbnQgPSBcIlwiO1xuICBjb25zdCBjb21wdXRlcmd1ZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlcmd1ZXNzXCIpO1xuICBjb21wdXRlcmd1ZXNzLnRleHRDb250ZW50ID0gXCJDb21wdXRlcidzIEd1ZXNzOiBcIlxuXG4gIHN0YXJ0YnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICBQbGF5ZXJib2FyZC5zaGlwQXJyYXkuc3BsaWNlKDAsIFBsYXllcmJvYXJkLnNoaXBBcnJheS5sZW5ndGgpO1xuICBQbGF5ZXJib2FyZC5TcXVhcmVzSGl0LnNwbGljZSgwLCBQbGF5ZXJib2FyZC5TcXVhcmVzSGl0Lmxlbmd0aCk7XG4gIENvbXB1dGVyYm9hcmQuc2hpcEFycmF5LnNwbGljZSgwLCBDb21wdXRlcmJvYXJkLnNoaXBBcnJheS5sZW5ndGgpO1xuICBDb21wdXRlcmJvYXJkLlNxdWFyZXNIaXQuc3BsaWNlKDAsIENvbXB1dGVyYm9hcmQuU3F1YXJlc0hpdC5sZW5ndGgpO1xuICBQbGF5ZXJib2FyZC5hcmVBbGxTaGlwc1N1bmsgPSBmYWxzZTtcbiAgQ29tcHV0ZXJib2FyZC5hcmVBbGxTaGlwc1N1bmsgPSBmYWxzZTtcblxuICBjb25zdCBhbGxzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKTtcbiAgYWxsc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICBzaGlwLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgfSlcbiAgZ2VuZXJhdGVDb21wdXRlclNoaXBzKCk7XG4gIGNvbnNvbGUubG9nKENvbXB1dGVyYm9hcmQuc2hpcEFycmF5KTtcbn1cblxuc3RhcnRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVMb29wKTtcbnJlc2V0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldEJ1dHRvbik7Il0sIm5hbWVzIjpbIkdhbWVib2FyZCIsImFyZUFsbFNoaXBzU3VuayIsIlNxdWFyZXNIaXQiLCJzaGlwQXJyYXkiLCJwbGFjZVNoaXAiLCJsZW5ndGgiLCJ4Y29vcmQiLCJ5Y29vcmQiLCJwb3NpdGlvbiIsIm5ld1NoaXAiLCJ0ZW1weCIsInRlbXB5Iiwic2hpcHNDb29yZGluYXRlc0FycmF5IiwiaSIsInNoaXBDb29yZGluYXRlcyIsInB1c2giLCJoaXRzIiwiaGl0IiwiaXNTdW5rIiwibGVuZ3RoT2ZTaGlwIiwiaGl0c09mU2hpcCIsInN1bmtTdGF0dXMiLCJTaGlwIiwicmVjZWl2ZUF0dGFjayIsIndhc0hpdCIsIm1lc3NhZ2UiLCJjb29yZGluYXRlcyIsImluY2x1ZGVzIiwiZm9yRWFjaCIsInNoaXAiLCJzZWxlY3RlZFNoaXBDb29yZGluYXRlcyIsImRldGVybWluZUlmQ29uY2x1ZGVkIiwic3Vua2VuU2hpcHMiLCJwbGF5ZXJib2FyZGRpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBsYXllckJvYXJkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwicm93IiwiaiIsInNxdWFyZWxhYmVsIiwidGV4dENvbnRlbnQiLCJzcXVhcmUiLCJzZXRBdHRyaWJ1dGUiLCJnZW5lcmF0ZVBsYXllckJvYXJkIiwiUGxheWVyYm9hcmQiLCJjb21wdXRlcmJvYXJkZGl2IiwiZ2VuZXJhdGVDb21wdXRlckJvYXJkIiwiQ29tcHV0ZXJib2FyZCIsInN0YXJ0YnV0dG9uIiwicmVzZXRidXR0b24iLCJyZXN1bHQiLCJwcmV2aGl0Y29vcmQiLCJhbGxjb21wdXRlcnNxdWFyZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2VuZXJhdGVDb21wdXRlclNoaXBzIiwidGVtcHhjb29yZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXB5Y29vcmQiLCJ0ZW1wcG9zIiwidGVtcHBvc2l0aW9uIiwib3ZlcmxhcHBlZHN0YXR1cyIsInNoaXBjb29yZCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcHV0ZXJzcXVhcmUiLCJhcnJheSIsImlkIiwic2hpcHNwbGFjZWQiLCJlIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInRhcmdldCIsInRlbXBsZW5ndGgiLCJjaGlsZEVsZW1lbnRDb3VudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY29udGFpbnMiLCJhbGxzcXVhcmVzIiwicHJldmVudERlZmF1bHQiLCJzdHJpbmdsZW4iLCJnZXREYXRhIiwieG9mZiIsInlvZmYiLCJwb3MiLCJsZW4iLCJwYXJzZUludCIsIm9mZnNldFhTcXVhcmUiLCJvZmZzZXRZU3F1YXJlIiwidGVtcG9PZmZzZXRZU3F1YXJlIiwiY2VpbCIsImNvb3JkYXJycmF5Iiwic3BsaXQiLCJmaW5hbHhjb29yZCIsImZpbmFseWNvb3JkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJkaXNhYmxlZCIsImxhc3RJbmRleCIsImxhc3RTaGlwIiwic3F1YXIiLCJnZW5lcmF0ZVZpc3VhbFNoaXBzIiwiY29tcHV0ZXJNb3ZlIiwiY29tcHV0ZXJndWVzcyIsImNvb3JkIiwicGxheWVyc3F1YXJlIiwidGVtcGVuZG9mYXJyYXkiLCJwbGF5ZXJNb3ZlIiwiY29tcHV0ZXJTcXVhcmVDbGlja2VkQ29vcmRzQXJyYXkiLCJDbGlja2VkQ29vcmRYIiwiQ2xpY2tlZENvb3JkWSIsImNvbG9yIiwiY29tcHV0ZXJzcXVhcmVzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInNwbGljZSJdLCJzb3VyY2VSb290IjoiIn0=
