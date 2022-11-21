(() => {
  "use strict";
  const e = () => {
    let e = !1;
    const t = [],
      a = [];
    return {
      placeShip: (e, t, r, s) => {
        const n = ((e, t, a, r) => {
          let s = t,
            n = a;
          const l = [];
          for (let t = 0; t < e; t += 1) {
            let e = `${s},${n}`;
            l.push(e),
              "vertical" === r
                ? (e = `${s},${(n += 1)}`)
                : "horizontal" === r && (e = `${(s += 1)},${n}`);
          }
          let o = 0;
          return {
            length: e,
            shipsCoordinatesArray: l,
            hits: o,
            hit: () => ((o += 1), o),
            position: r,
            isSunk: (e, t) => e <= t,
            sunkStatus: !1,
          };
        })(e, t, r, s);
        return a.push(n), a;
      },
      receiveAttack: (e, r) => {
        let s = !1,
          n = "";
        const l = `${e},${r}`;
        return t.includes(l)
          ? "Please enter coordinates not previously attacked!"
          : (a.forEach((e) => {
              e.shipsCoordinatesArray.forEach((t) =>
                !0 === s
                  ? n
                  : l !== t
                  ? ((n = "Attack Missed!"), n)
                  : ((s = !0),
                    (e.hits = e.hit()),
                    (e.sunkStatus = e.isSunk(e.length, e.hits)),
                    (n = "Attack Landed!"),
                    n)
              );
            }),
            t.push(l),
            n);
      },
      shipArray: a,
      SquaresHit: t,
      determineIfConcluded: () => {
        let t = 0;
        return (
          a.forEach((e) => {
            !0 === e.sunkStatus && (t += 1);
          }),
          t !== a.length ? ((e = !1), e) : ((e = !0), e)
        );
      },
      areAllShipsSunk: e,
    };
  };
  let t = "Player 1";
  (document.getElementById("overlay").style.display = "block"),
    (t = void document
      .getElementById("confirmname")
      .addEventListener("click", () => {
        const e = document.getElementById("name"),
          t = document.querySelector(".playername");
        return (
          "" === e.value && (e.value = "Player"),
          (t.textContent = e.value),
          (document.getElementById("overlay").style.display = "none"),
          (document.querySelector(
            ".playerguesses"
          ).textContent = `${e.value}'s Last Guess:`),
          e.value
        );
      })),
    (() => {
      const e = document.querySelector(".playerboard"),
        t = document.createElement("div");
      t.classList.add("playerboard"), e.appendChild(t);
      for (let e = 9; e >= -1; e -= 1) {
        const a = document.createElement("div");
        if ((a.classList.add("row"), -1 === e))
          for (let e = -1; e < 10; e += 1)
            if (-1 === e) {
              const e = document.createElement("div");
              e.classList.add("squarelabel"), a.appendChild(e);
            } else {
              const t = document.createElement("div");
              t.classList.add("squarelabel"),
                (t.textContent = `${e}`),
                a.appendChild(t);
            }
        else
          for (let t = -1; t < 10; t += 1)
            if (-1 === t) {
              const t = document.createElement("div");
              t.classList.add("squarelabel"),
                (t.textContent = `${e}`),
                a.appendChild(t);
            } else {
              const r = document.createElement("div");
              r.classList.add("playersquare"),
                r.setAttribute("id", `${t},${e}`),
                a.appendChild(r);
            }
        t.appendChild(a);
      }
    })();
  const a = e();
  (() => {
    const e = document.querySelector(".computerboard"),
      t = document.createElement("div");
    t.classList.add("playerboard"), e.appendChild(t);
    for (let e = 9; e >= -1; e -= 1) {
      const a = document.createElement("div");
      if ((a.classList.add("row"), -1 === e))
        for (let e = -1; e < 10; e += 1)
          if (-1 === e) {
            const e = document.createElement("div");
            e.classList.add("squarelabel"), a.appendChild(e);
          } else {
            const t = document.createElement("div");
            t.classList.add("squarelabel"),
              (t.textContent = `${e}`),
              a.appendChild(t);
          }
      else
        for (let t = -1; t < 10; t += 1)
          if (-1 === t) {
            const t = document.createElement("div");
            t.classList.add("squarelabel"),
              (t.textContent = `${e}`),
              a.appendChild(t);
          } else {
            const r = document.createElement("div");
            r.classList.add("square"),
              r.setAttribute("id", `${t},${e}`),
              a.appendChild(r);
          }
      t.appendChild(a);
    }
  })();
  const r = e(),
    s = document.querySelector(".start");
  s.disabled = !0;
  const n = document.querySelector(".reset"),
    l = document.querySelector(".result"),
    o = document.querySelector(".prevhitcoord"),
    i = document.querySelectorAll(".square"),
    d = [];
  let c;
  const u = () => {
    for (let e = 1; e < 7; e += 1)
      if (6 === r.shipArray.length) e = 8;
      else {
        e = r.shipArray.length + 1;
        const t = Math.floor(Math.random() * (10 - e)),
          a = Math.floor(Math.random() * (10 - e)),
          s = Math.floor(2 * Math.random());
        let n;
        1 === s ? (n = "vertical") : 0 === s && (n = "horizontal");
        let l = !1;
        r.shipArray.forEach((r) => {
          r.shipsCoordinatesArray.forEach((r) => {
            for (let s = 0; s < e; s += 1)
              "vertical" === n
                ? r === `${t},${a + s}` && (l = !0)
                : "horizontal" === n && r === `${t + s},${a}` && (l = !0);
            return e;
          });
        }),
          !0 === l ? (e -= 1) : r.placeShip(e, t, a, n);
      }
  };
  u(),
    document.querySelector(".secret").addEventListener("click", () => {
      i.forEach((e) => {
        for (let t = 0; t < r.shipArray.length; t += 1)
          r.shipArray[t].shipsCoordinatesArray.forEach((t) => {
            t === e.id && e.classList.add("blue");
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
      const t = document.querySelectorAll(".playersquare");
      t.forEach((r) => {
        r.addEventListener("dragover", (e) => {
          e.preventDefault();
        }),
          r.addEventListener("drop", (r) => {
            r.preventDefault();
            const n = r.dataTransfer.getData("stringlen"),
              l = r.dataTransfer.getData("xoff"),
              o = r.dataTransfer.getData("yoff"),
              i = r.dataTransfer.getData("pos"),
              d = parseInt(n, 10);
            let c = 0,
              u = 0;
            if ("vertical" === i) {
              c = 0;
              const e = Math.ceil(o / 34);
              u = d - e;
            } else "horizontal" === i && ((c = Math.floor(l / 34)), (u = 0));
            const h = r.target.id.split(","),
              p = parseInt(h[0], 10) - c,
              f = parseInt(h[1], 10) - u;
            if (
              ("vertical" === i && f + d > 10) ||
              ("vertical" === i && f < 0)
            );
            else if (
              ("horizontal" === i && p + d > 10) ||
              ("horizontal" === i && p < 0)
            );
            else {
              let n = !1;
              if (
                (a.shipArray.forEach((e) => {
                  e.shipsCoordinatesArray.forEach((e) => {
                    for (let t = 0; t < d; t += 1)
                      "vertical" === i
                        ? e === `${p},${f + t}` && (n = !0)
                        : "horizontal" === i &&
                          e === `${p + t},${f}` &&
                          (n = !0);
                  });
                }),
                !0 === n)
              );
              else {
                a.placeShip(d, p, f, i),
                  (document.getElementById(
                    r.dataTransfer.getData("shipgrabbed")
                  ).style.visibility = "hidden"),
                  (e += 1),
                  6 === e && ((e = 0), (s.disabled = !1));
                const n = a.shipArray.length - 1,
                  l = a.shipArray[n];
                t.forEach((e) => {
                  for (let t = 0; t < l.shipsCoordinatesArray.length; t += 1)
                    e.id === l.shipsCoordinatesArray[t] &&
                      e.classList.add("blue");
                });
              }
            }
          });
      });
    })();
  const h = () => {
      const e = document.querySelector(".computerguess");
      let t,
        r,
        s,
        n,
        l = 0;
      if (
        ((l = a.SquaresHit.length),
        e.textContent === `Hit: ${a.SquaresHit[l - 1]}`)
      ) {
        const e = a.SquaresHit[l - 1].split(","),
          o = e[0],
          i = e[1];
        "right" === c && o < 9 && !1 === d.includes("right")
          ? ((s = 0), (n = 0))
          : "left" === c && o > 0 && !1 === d.includes("left")
          ? ((s = 0), (n = 1))
          : "up" === c && i < 9 && !1 === d.includes("up")
          ? ((s = 1), (n = 0))
          : "down" === c && i > 0 && !1 === d.includes("down")
          ? ((s = 1), (n = 1))
          : 4 === d.length
          ? ((t = Math.floor(10 * Math.random())),
            (r = Math.floor(10 * Math.random())))
          : ((s = Math.floor(2 * Math.random())),
            (n = Math.floor(2 * Math.random()))),
          0 === s
            ? 0 === n
              ? ((t = parseInt(o, 10) + 1),
                (r = parseInt(i, 10)),
                (c = "right"))
              : 1 === n &&
                ((t = parseInt(o, 10) - 1), (r = parseInt(i, 10)), (c = "left"))
            : 1 === s &&
              (0 === n
                ? ((t = parseInt(o, 10)), (r = parseInt(i, 10) + 1), (c = "up"))
                : 1 === n &&
                  ((t = parseInt(o, 10)),
                  (r = parseInt(i, 10) - 1),
                  (c = "down"))),
          (t < 0 || t > 9 || r > 9 || r < 0) &&
            ("right" === c
              ? (t = -0)
              : "left" === c
              ? (t = 0)
              : "up" === c
              ? (r = -0)
              : "down" === c && (r = 0));
      } else
        (c = void 0),
          (t = Math.floor(10 * Math.random())),
          (r = Math.floor(10 * Math.random()));
      const o = `${t},${r}`;
      return (
        a.SquaresHit.includes(o)
          ? (!1 === d.includes(c) && d.push(c), h())
          : (d.splice(0, d.length),
            a.receiveAttack(t, r),
            document.querySelectorAll(".playersquare").forEach((t) => {
              if (t.id === o)
                for (let r = 0; r < a.shipArray.length; r += 1)
                  for (
                    let s = 0;
                    s < a.shipArray[r].shipsCoordinatesArray.length;
                    s += 1
                  )
                    if (t.id !== a.shipArray[r].shipsCoordinatesArray[s])
                      (l = a.SquaresHit.length),
                        (e.textContent = `Missed: ${a.SquaresHit[l - 1]}`),
                        t.classList.add("failedhit");
                    else if (t.id === a.shipArray[r].shipsCoordinatesArray[s])
                      return (
                        (l = a.SquaresHit.length),
                        (e.textContent = `Hit: ${a.SquaresHit[l - 1]}`),
                        void t.classList.add("successfulhit")
                      );
            })),
        c
      );
    },
    p = (e) => {
      const s = e.target,
        n = e.target.id.split(","),
        d = n[0],
        c = n[1];
      let u = 0;
      (o.textContent = r.receiveAttack(d, c)),
        "Please enter coordinates not previously attacked!" !== o.textContent &&
          ("Attack Missed!" === o.textContent
            ? ((u = r.SquaresHit.length),
              (l.textContent = `Missed: ${r.SquaresHit[u - 1]}`),
              (l.style.color = "red"),
              s.classList.add("failedhit"))
            : "Attack Landed!" === o.textContent &&
              ((u = r.SquaresHit.length),
              (l.textContent = `Hit: ${r.SquaresHit[u - 1]}`),
              (l.style.color = "green"),
              s.classList.add("successfulhit")),
          !0 === r.determineIfConcluded()
            ? ((l.textContent = `Game Over! ${t} wins!`),
              (l.style.color = "green"),
              i.forEach((e) => {
                e.removeEventListener("click", p);
              }))
            : (h(),
              !0 === a.determineIfConcluded() &&
                ((l.textContent = "Game Over! Computer wins!"),
                (l.style.color = "red"),
                i.forEach((e) => {
                  e.removeEventListener("click", p);
                }))));
    };
  s.addEventListener("click", () => {
    (s.disabled = !0),
      i.forEach((e) => {
        e.addEventListener("click", p);
      });
  }),
    n.addEventListener("click", () => {
      document.querySelectorAll(".playersquare").forEach((e) => {
        e.classList.remove("successfulhit"),
          e.classList.remove("failedhit"),
          e.classList.remove("blue");
      }),
        i.forEach((e) => {
          e.removeEventListener("click", p),
            e.classList.remove("successfulhit"),
            e.classList.remove("failedhit"),
            e.classList.remove("blue");
        }),
        (o.textContent = ""),
        (l.textContent = ""),
        (document.querySelector(".computerguess").textContent =
          "Computer's Guess: "),
        (s.disabled = !0),
        a.shipArray.splice(0, a.shipArray.length),
        a.SquaresHit.splice(0, a.SquaresHit.length),
        r.shipArray.splice(0, r.shipArray.length),
        r.SquaresHit.splice(0, r.SquaresHit.length),
        (a.areAllShipsSunk = !1),
        (r.areAllShipsSunk = !1),
        document.querySelectorAll(".ship").forEach((e) => {
          e.style.visibility = "visible";
        }),
        u();
    });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8saUJBQzlCUixFQUFhOUUsVUFBVXNGLE9BQU8sYUFDOUJSLEVBQWE5RSxVQUFVc0YsT0FBTyxPQUFPLElBR3ZDcEUsRUFBbUJyQyxTQUFTbUQsSUFDMUJBLEVBQWVxRCxvQkFBb0IsUUFBU04sR0FDNUMvQyxFQUFlaEMsVUFBVXNGLE9BQU8saUJBQ2hDdEQsRUFBZWhDLFVBQVVzRixPQUFPLGFBQ2hDdEQsRUFBZWhDLFVBQVVzRixPQUFPLE9BQU8sSUFHekNyRSxFQUFhckIsWUFBYyxHQUMzQm9CLEVBQU9wQixZQUFjLEdBQ0NULFNBQVNPLGNBQWMsa0JBQy9CRSxZQUFjLHFCQUU1QmlCLEVBQVlDLFVBQVcsRUFFdkJMLEVBQVlyRCxVQUFVeUgsT0FBTyxFQUFHcEUsRUFBWXJELFVBQVVFLFFBQ3REbUQsRUFBWXRELFdBQVcwSCxPQUFPLEVBQUdwRSxFQUFZdEQsV0FBV0csUUFDeERzRCxFQUFjeEQsVUFBVXlILE9BQU8sRUFBR2pFLEVBQWN4RCxVQUFVRSxRQUMxRHNELEVBQWN6RCxXQUFXMEgsT0FBTyxFQUFHakUsRUFBY3pELFdBQVdHLFFBQzVEbUQsRUFBWXZELGlCQUFrQixFQUM5QjBELEVBQWMxRCxpQkFBa0IsRUFFZmlDLFNBQVNnQyxpQkFBaUIsU0FDbEN0QyxTQUFTQyxJQUNoQkEsRUFBS08sTUFBTXlFLFdBQWEsU0FBUyxJQUVuQ3hDLEdBQXVCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Rlc2lnbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaGlwID0gKGxlbmd0aCwgeGNvb3JkLCB5Y29vcmQsIHBvc2l0aW9uKSA9PiB7XG4gIGxldCB0ZW1weCA9IHhjb29yZDtcbiAgbGV0IHRlbXB5ID0geWNvb3JkO1xuXG4gIGNvbnN0IHNoaXBzQ29vcmRpbmF0ZXNBcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgbGV0IHNoaXBDb29yZGluYXRlcyA9IGAke3RlbXB4fSwke3RlbXB5fWA7XG4gICAgc2hpcHNDb29yZGluYXRlc0FycmF5LnB1c2goc2hpcENvb3JkaW5hdGVzKTtcblxuICAgIGlmIChwb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBzaGlwQ29vcmRpbmF0ZXMgPSBgJHt0ZW1weH0sJHsodGVtcHkgKz0gMSl9YDtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgc2hpcENvb3JkaW5hdGVzID0gYCR7KHRlbXB4ICs9IDEpfSwke3RlbXB5fWA7XG4gICAgfVxuICB9XG5cbiAgbGV0IGhpdHMgPSAwO1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cyArPSAxO1xuICAgIC8vIGNvbnNvbGUubG9nKGhpdHMpO1xuICAgIHJldHVybiBoaXRzO1xuICB9O1xuXG4gIGNvbnN0IHN1bmtTdGF0dXMgPSBmYWxzZTtcbiAgY29uc3QgaXNTdW5rID0gKGxlbmd0aE9mU2hpcCwgaGl0c09mU2hpcCkgPT4ge1xuICAgIGlmIChsZW5ndGhPZlNoaXAgPD0gaGl0c09mU2hpcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGxlbmd0aCxcbiAgICBzaGlwc0Nvb3JkaW5hdGVzQXJyYXksXG4gICAgaGl0cyxcbiAgICBoaXQsXG4gICAgcG9zaXRpb24sXG4gICAgaXNTdW5rLFxuICAgIHN1bmtTdGF0dXMsXG4gIH07XG59O1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGxldCBhcmVBbGxTaGlwc1N1bmsgPSBmYWxzZTtcbiAgY29uc3QgU3F1YXJlc0hpdCA9IFtdO1xuICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAobGVuZ3RoLCB4Y29vcmQsIHljb29yZCwgcG9zaXRpb24pID0+IHtcbiAgICAvLyBTT01FSFdFUkUgSEVSRSBBREQgVkFMSURBVElPTiA9IEdPSU5HIFRIUk9VR0ggQUxMIFRIRSBDT09SRFMgT0YgVEhFIFBSRVZJT1VTIFNISVBTIEFORCBDSEVDS0lORyBUSEVZIERPTlQgRVFVQUwgRUFDSCBPVEhFUi5cbiAgICBjb25zdCBuZXdTaGlwID0gU2hpcChsZW5ndGgsIHhjb29yZCwgeWNvb3JkLCBwb3NpdGlvbik7XG4gICAgc2hpcEFycmF5LnB1c2gobmV3U2hpcCk7XG4gICAgcmV0dXJuIHNoaXBBcnJheTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHhjb29yZCwgeWNvb3JkKSA9PiB7XG4gICAgbGV0IHdhc0hpdCA9IGZhbHNlO1xuICAgIGxldCBtZXNzYWdlID0gXCJcIjtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGAke3hjb29yZH0sJHt5Y29vcmR9YDtcbiAgICBpZiAoU3F1YXJlc0hpdC5pbmNsdWRlcyhjb29yZGluYXRlcykpIHtcbiAgICAgIHJldHVybiBcIlBsZWFzZSBlbnRlciBjb29yZGluYXRlcyBub3QgcHJldmlvdXNseSBhdHRhY2tlZCFcIjtcbiAgICB9XG4gICAgc2hpcEFycmF5LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuc2hpcHNDb29yZGluYXRlc0FycmF5LmZvckVhY2goKHNlbGVjdGVkU2hpcENvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIGlmICh3YXNIaXQgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlcyA9PT0gc2VsZWN0ZWRTaGlwQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UgPSBcIkF0dGFjayBNaXNzZWQhXCI7XG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgd2FzSGl0ID0gdHJ1ZTtcbiAgICAgICAgc2hpcC5oaXRzID0gc2hpcC5oaXQoKTtcbiAgICAgICAgc2hpcC5zdW5rU3RhdHVzID0gc2hpcC5pc1N1bmsoc2hpcC5sZW5ndGgsIHNoaXAuaGl0cyk7XG4gICAgICAgIG1lc3NhZ2UgPSBcIkF0dGFjayBMYW5kZWQhXCI7XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgU3F1YXJlc0hpdC5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfTtcblxuICBjb25zdCBkZXRlcm1pbmVJZkNvbmNsdWRlZCA9ICgpID0+IHtcbiAgICBsZXQgc3Vua2VuU2hpcHMgPSAwO1xuICAgIHNoaXBBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5zdW5rU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgIHN1bmtlblNoaXBzICs9IDE7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3Vua2VuU2hpcHMgPT09IHNoaXBBcnJheS5sZW5ndGgpIHtcbiAgICAgIGFyZUFsbFNoaXBzU3VuayA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZUFsbFNoaXBzU3VuayA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGFyZUFsbFNoaXBzU3VuaztcbiAgICB9XG4gICAgcmV0dXJuIGFyZUFsbFNoaXBzU3VuaztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHNoaXBBcnJheSxcbiAgICBTcXVhcmVzSGl0LFxuICAgIGRldGVybWluZUlmQ29uY2x1ZGVkLFxuICAgIGFyZUFsbFNoaXBzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAsIEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHtcbiAgZ2V0UGxheWVyTmFtZSxcbiAgZ2VuZXJhdGVQbGF5ZXJCb2FyZCxcbiAgZ2VuZXJhdGVDb21wdXRlckJvYXJkLFxufSBmcm9tIFwiLi9kZXNpZ25cIjtcblxuLy8gR2FtZSBsb29wIGJlZ2luc1xuLy8gR2V0cyB0aGUgcGxheWVyIGFuZCBjcmVhdGVzIGJvdGggZ2FtZWJvYXJkcywgYW5kIGJvdGggb2JqZWN0cy5cbmxldCBwbGF5ZXJzbmFtZSA9IFwiUGxheWVyIDFcIjtcbnBsYXllcnNuYW1lID0gZ2V0UGxheWVyTmFtZSgpO1xuZ2VuZXJhdGVQbGF5ZXJCb2FyZCgpO1xuY29uc3QgUGxheWVyYm9hcmQgPSBHYW1lYm9hcmQoKTtcbmdlbmVyYXRlQ29tcHV0ZXJCb2FyZCgpO1xuY29uc3QgQ29tcHV0ZXJib2FyZCA9IEdhbWVib2FyZCgpO1xuY29uc3Qgc3RhcnRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0XCIpO1xuc3RhcnRidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuY29uc3QgcmVzZXRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0XCIpO1xuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG5jb25zdCBwcmV2aGl0Y29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXZoaXRjb29yZFwiKTtcbmNvbnN0IGFsbGNvbXB1dGVyc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuY29uc3QgZGlyZWN0aW9uQXJyYXkgPSBbXTtcbmxldCBkaXJlY3Rpb247XG4vLyBsZXQgdGVzdCA9IFwiMVwiO1xuLy8gY29uc29sZS5sb2codGVzdCk7XG5cbmNvbnN0IGdlbmVyYXRlQ29tcHV0ZXJTaGlwcyA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpICs9IDEpIHtcbiAgICBpZiAoQ29tcHV0ZXJib2FyZC5zaGlwQXJyYXkubGVuZ3RoID09PSA2KSB7XG4gICAgICBpID0gODtcbiAgICB9IGVsc2Uge1xuICAgICAgaSA9IENvbXB1dGVyYm9hcmQuc2hpcEFycmF5Lmxlbmd0aCArIDE7XG4gICAgICBjb25zdCB0ZW1weGNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gaSkpO1xuICAgICAgY29uc3QgdGVtcHljb29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIGkpKTtcbiAgICAgIGNvbnN0IHRlbXBwb3MgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgIGxldCB0ZW1wcG9zaXRpb247XG4gICAgICBpZiAodGVtcHBvcyA9PT0gMSkge1xuICAgICAgICB0ZW1wcG9zaXRpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgICB9IGVsc2UgaWYgKHRlbXBwb3MgPT09IDApIHtcbiAgICAgICAgdGVtcHBvc2l0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gICAgICB9XG4gICAgICBsZXQgb3ZlcmxhcHBlZHN0YXR1cyA9IGZhbHNlO1xuICAgICAgQ29tcHV0ZXJib2FyZC5zaGlwQXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwLnNoaXBzQ29vcmRpbmF0ZXNBcnJheS5mb3JFYWNoKChzaGlwY29vcmQpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGk7IGogKz0gMSkge1xuICAgICAgICAgICAgaWYgKHRlbXBwb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgIGlmIChzaGlwY29vcmQgPT09IGAke3RlbXB4Y29vcmR9LCR7dGVtcHljb29yZCArIGp9YCkge1xuICAgICAgICAgICAgICAgIG92ZXJsYXBwZWRzdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRlbXBwb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgaWYgKHNoaXBjb29yZCA9PT0gYCR7dGVtcHhjb29yZCArIGp9LCR7dGVtcHljb29yZH1gKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxhcHBlZHN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChvdmVybGFwcGVkc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgIGkgLT0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIENvbXB1dGVyYm9hcmQucGxhY2VTaGlwKGksIHRlbXB4Y29vcmQsIHRlbXB5Y29vcmQsIHRlbXBwb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5nZW5lcmF0ZUNvbXB1dGVyU2hpcHMoKTtcblxuY29uc3QgZ2VuZXJhdGVWaXN1YWxTaGlwcyA9ICgpID0+IHtcbiAgbGV0IHNoaXBzcGxhY2VkID0gMDtcblxuICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKTtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT4ge1xuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInNoaXBncmFiYmVkXCIsIGUudGFyZ2V0LmlkKTtcbiAgICAgIGNvbnN0IHRlbXBsZW5ndGggPSBlLnRhcmdldC5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzdHJpbmdsZW5cIiwgdGVtcGxlbmd0aCk7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwieG9mZlwiLCBlLm9mZnNldFgpO1xuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInlvZmZcIiwgZS5vZmZzZXRZKTtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKSkge1xuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwicG9zXCIsIFwidmVydGljYWxcIik7XG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhvcml6b250YWxcIikpIHtcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInBvc1wiLCBcImhvcml6b250YWxcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGFsbHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllcnNxdWFyZVwiKTtcbiAgYWxsc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBzdHJpbmdsZW4gPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic3RyaW5nbGVuXCIpO1xuICAgICAgY29uc3QgeG9mZiA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ4b2ZmXCIpO1xuICAgICAgY29uc3QgeW9mZiA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ5b2ZmXCIpO1xuICAgICAgY29uc3QgcG9zID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInBvc1wiKTtcblxuICAgICAgY29uc3QgbGVuID0gcGFyc2VJbnQoc3RyaW5nbGVuLCAxMCk7XG4gICAgICBsZXQgb2Zmc2V0WFNxdWFyZSA9IDA7XG4gICAgICBsZXQgb2Zmc2V0WVNxdWFyZSA9IDA7XG4gICAgICBpZiAocG9zID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgb2Zmc2V0WFNxdWFyZSA9IDA7XG4gICAgICAgIGNvbnN0IHRlbXBvT2Zmc2V0WVNxdWFyZSA9IE1hdGguY2VpbCh5b2ZmIC8gMzQpO1xuICAgICAgICBvZmZzZXRZU3F1YXJlID0gbGVuIC0gdGVtcG9PZmZzZXRZU3F1YXJlO1xuICAgICAgfSBlbHNlIGlmIChwb3MgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIG9mZnNldFhTcXVhcmUgPSBNYXRoLmZsb29yKHhvZmYgLyAzNCk7XG4gICAgICAgIG9mZnNldFlTcXVhcmUgPSAwO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdHJpbmdjb29yZCA9IGUudGFyZ2V0LmlkO1xuICAgICAgY29uc3QgY29vcmRhcnJyYXkgPSBzdHJpbmdjb29yZC5zcGxpdChcIixcIik7XG5cbiAgICAgIGNvbnN0IGZpbmFseGNvb3JkID0gcGFyc2VJbnQoY29vcmRhcnJyYXlbMF0sIDEwKSAtIG9mZnNldFhTcXVhcmU7XG4gICAgICBjb25zdCBmaW5hbHljb29yZCA9IHBhcnNlSW50KGNvb3JkYXJycmF5WzFdLCAxMCkgLSBvZmZzZXRZU3F1YXJlO1xuXG4gICAgICBpZiAoXG4gICAgICAgIChwb3MgPT09IFwidmVydGljYWxcIiAmJiBmaW5hbHljb29yZCArIGxlbiA+IDEwKSB8fFxuICAgICAgICAocG9zID09PSBcInZlcnRpY2FsXCIgJiYgZmluYWx5Y29vcmQgPCAwKVxuICAgICAgKSB7XG4gICAgICAgIC8vXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAocG9zID09PSBcImhvcml6b250YWxcIiAmJiBmaW5hbHhjb29yZCArIGxlbiA+IDEwKSB8fFxuICAgICAgICAocG9zID09PSBcImhvcml6b250YWxcIiAmJiBmaW5hbHhjb29yZCA8IDApXG4gICAgICApIHtcbiAgICAgICAgLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBvdmVybGFwcGVkc3RhdHVzID0gZmFsc2U7XG4gICAgICAgIFBsYXllcmJvYXJkLnNoaXBBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgc2hpcC5zaGlwc0Nvb3JkaW5hdGVzQXJyYXkuZm9yRWFjaCgoc2hpcGNvb3JkKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaiArPSAxKSB7XG4gICAgICAgICAgICAgIGlmIChwb3MgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwY29vcmQgPT09IGAke2ZpbmFseGNvb3JkfSwke2ZpbmFseWNvb3JkICsgan1gKSB7XG4gICAgICAgICAgICAgICAgICBvdmVybGFwcGVkc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwY29vcmQgPT09IGAke2ZpbmFseGNvb3JkICsgan0sJHtmaW5hbHljb29yZH1gKSB7XG4gICAgICAgICAgICAgICAgICBvdmVybGFwcGVkc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG92ZXJsYXBwZWRzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFBsYXllcmJvYXJkLnBsYWNlU2hpcChsZW4sIGZpbmFseGNvb3JkLCBmaW5hbHljb29yZCwgcG9zKTtcbiAgICAgICAgICBjb25zdCBzaGlwZ3JhYmJlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNoaXBncmFiYmVkXCIpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzaGlwZ3JhYmJlZC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICBzaGlwc3BsYWNlZCArPSAxO1xuICAgICAgICAgIGlmIChzaGlwc3BsYWNlZCA9PT0gNikge1xuICAgICAgICAgICAgc2hpcHNwbGFjZWQgPSAwO1xuICAgICAgICAgICAgc3RhcnRidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gUGxheWVyYm9hcmQuc2hpcEFycmF5Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgY29uc3QgbGFzdFNoaXAgPSBQbGF5ZXJib2FyZC5zaGlwQXJyYXlbbGFzdEluZGV4XTtcbiAgICAgICAgICBhbGxzcXVhcmVzLmZvckVhY2goKHNxdWFyKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RTaGlwLnNoaXBzQ29vcmRpbmF0ZXNBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICBpZiAoc3F1YXIuaWQgPT09IGxhc3RTaGlwLnNoaXBzQ29vcmRpbmF0ZXNBcnJheVtpXSkge1xuICAgICAgICAgICAgICAgIHNxdWFyLmNsYXNzTGlzdC5hZGQoXCJibHVlXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZWNyZXRmdW5jdGlvbiA9ICgpID0+IHtcbiAgYWxsY29tcHV0ZXJzcXVhcmVzLmZvckVhY2goKGNvbXB1dGVyc3F1YXJlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb21wdXRlcmJvYXJkLnNoaXBBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgQ29tcHV0ZXJib2FyZC5zaGlwQXJyYXlbaV0uc2hpcHNDb29yZGluYXRlc0FycmF5LmZvckVhY2goKGFycmF5KSA9PiB7XG4gICAgICAgIGlmIChhcnJheSA9PT0gY29tcHV0ZXJzcXVhcmUuaWQpIHtcbiAgICAgICAgICBjb21wdXRlcnNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYmx1ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHNlY3JldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjcmV0XCIpO1xuc2VjcmV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWNyZXRmdW5jdGlvbik7XG5cbmdlbmVyYXRlVmlzdWFsU2hpcHMoKTtcblxuLy8gY3JlYXRlIGEgcmVzZXQgYnV0dG9uIGZvciBhbGwgc2hpcHNcbmNvbnN0IGNvbXB1dGVyTW92ZSA9ICgpID0+IHtcbiAgY29uc3QgY29tcHV0ZXJndWVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJndWVzc1wiKTtcbiAgbGV0IHRlbXBlbmRvZmFycmF5ID0gMDtcbiAgdGVtcGVuZG9mYXJyYXkgPSBQbGF5ZXJib2FyZC5TcXVhcmVzSGl0Lmxlbmd0aDtcbiAgbGV0IHRlbXB4Y29vcmQ7XG4gIGxldCB0ZW1weWNvb3JkO1xuICBsZXQgeG9yeTtcbiAgbGV0IHBsdXNvcm1pbnVzO1xuICBcbiAgLy8gY29kaW5nIEFJXG4gIC8vIGlmIGl0J3MgdGhlIHByZXZpb3VzIGNvbXB1dGVyIGd1ZXNzIHdhcyBhIGhpdC5cbiAgaWYgKGNvbXB1dGVyZ3Vlc3MudGV4dENvbnRlbnQgPT09IGBIaXQ6ICR7UGxheWVyYm9hcmQuU3F1YXJlc0hpdFt0ZW1wZW5kb2ZhcnJheSAtIDFdXG4gIH1gKSB7IFxuICAgIFxuICAgIGNvbnN0IGxhc3Rjb29yZCA9IFBsYXllcmJvYXJkLlNxdWFyZXNIaXRbdGVtcGVuZG9mYXJyYXkgLSAxXTtcbiAgICBjb25zdCBjb29yZGFycmF5ID0gbGFzdGNvb3JkLnNwbGl0KFwiLFwiKTtcbiAgICBjb25zdCBjb29yZHggPSBjb29yZGFycmF5WzBdO1xuICAgIGNvbnN0IGNvb3JkeSA9IGNvb3JkYXJyYXlbMV07XG5cbiAgICAgIC8vIG1haW50YWlucyBjdXJyZW50IGRpcmVjdGlvblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiICYmIGNvb3JkeCA8IDkgJiYgZGlyZWN0aW9uQXJyYXkuaW5jbHVkZXMoXCJyaWdodFwiKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgeG9yeSA9IDA7XG4gICAgICAgIHBsdXNvcm1pbnVzID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIiAmJiBjb29yZHggPiAwICYmIGRpcmVjdGlvbkFycmF5LmluY2x1ZGVzKFwibGVmdFwiKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgeG9yeSA9IDA7XG4gICAgICAgIHBsdXNvcm1pbnVzID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIgJiYgY29vcmR5IDwgOSAmJiBkaXJlY3Rpb25BcnJheS5pbmNsdWRlcyhcInVwXCIpID09PSBmYWxzZSkge1xuICAgICAgICB4b3J5ID0gMTtcbiAgICAgICAgcGx1c29ybWludXMgPSAwXG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIgJiYgY29vcmR5ID4gMCAmJiBkaXJlY3Rpb25BcnJheS5pbmNsdWRlcyhcImRvd25cIikgPT09IGZhbHNlKSB7XG4gICAgICAgIHhvcnkgPSAxO1xuICAgICAgICBwbHVzb3JtaW51cyA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbkFycmF5Lmxlbmd0aCA9PT0gNCkge1xuICAgICAgICB0ZW1weGNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB0ZW1weWNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeG9yeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpOyAvLyAwIC0gMSBcbiAgICAgICAgcGx1c29ybWludXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTsgLy8gMCAtIDEgXG4gICAgICB9XG4gIFxuICAgICAgLy8gdXNlcyB0aGUgZGlyZWN0aW9uIHRvIGFkZCB0byB0aGUgY29vcmRpbmF0ZXMuXG4gICAgICBpZiAoeG9yeSA9PT0gMCkge1xuICAgICAgICBpZiAocGx1c29ybWludXMgPT09IDApIHtcbiAgICAgICAgICB0ZW1weGNvb3JkID0gKHBhcnNlSW50KGNvb3JkeCwgMTApICsgMSlcbiAgICAgICAgICB0ZW1weWNvb3JkID0gcGFyc2VJbnQoY29vcmR5LCAxMCk7XG4gICAgICAgICAgZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocGx1c29ybWludXMgPT09IDEpIHtcbiAgICAgICAgICB0ZW1weGNvb3JkID0gKHBhcnNlSW50KGNvb3JkeCwgMTApIC0gMSlcbiAgICAgICAgICB0ZW1weWNvb3JkID0gcGFyc2VJbnQoY29vcmR5LCAxMCk7XG4gICAgICAgICAgZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG5cblxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHhvcnkgPT09IDEpIHtcbiAgICAgICAgaWYgKHBsdXNvcm1pbnVzID09PSAwKSB7XG4gICAgICAgICAgdGVtcHhjb29yZCA9IHBhcnNlSW50KGNvb3JkeCwgMTApO1xuICAgICAgICAgIHRlbXB5Y29vcmQgPSAocGFyc2VJbnQoY29vcmR5LCAxMCkgKyAxKVxuICAgICAgICAgIGRpcmVjdGlvbiA9IFwidXBcIjtcblxuICAgICAgICB9IGVsc2UgaWYgKHBsdXNvcm1pbnVzID09PSAxKSB7XG4gICAgICAgICAgdGVtcHhjb29yZCA9IHBhcnNlSW50KGNvb3JkeCwgMTApO1xuICAgICAgICAgIHRlbXB5Y29vcmQgPSAocGFyc2VJbnQoY29vcmR5LCAxMCkgLSAxKVxuICAgICAgICAgIGRpcmVjdGlvbiA9IFwiZG93blwiO1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRlbXB4Y29vcmQgPCAwIHx8IHRlbXB4Y29vcmQgPiA5IHx8IHRlbXB5Y29vcmQgPiA5IHx8IHRlbXB5Y29vcmQgPCAwKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgdGVtcHhjb29yZCA9LSAwO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIHRlbXB4Y29vcmQgPSsgMDtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICAgICAgdGVtcHljb29yZCA9LSAwO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XG4gICAgICAgIHRlbXB5Y29vcmQgPSsgMDtcbiAgICAgIH1cbiAgICAgIH1cblxuXG4gIH0gZWxzZSB7XG4gICAgZGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRlbXB4Y29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgdGVtcHljb29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgfVxuICBjb25zdCBjb29yZCA9IGAke3RlbXB4Y29vcmR9LCR7dGVtcHljb29yZH1gO1xuICBpZiAoUGxheWVyYm9hcmQuU3F1YXJlc0hpdC5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICBpZiAoZGlyZWN0aW9uQXJyYXkuaW5jbHVkZXMoZGlyZWN0aW9uKSA9PT0gZmFsc2UpIHtcbiAgICAgIGRpcmVjdGlvbkFycmF5LnB1c2goZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgY29tcHV0ZXJNb3ZlKCk7XG4gIH0gZWxzZSB7XG4gICAgZGlyZWN0aW9uQXJyYXkuc3BsaWNlKDAsIGRpcmVjdGlvbkFycmF5Lmxlbmd0aCk7XG4vLyBeXiBsb29rIGludG8gaWYgdGhhdCdzIGluIHRoZSByaWdodCBwbGFjZS5cbiAgICBQbGF5ZXJib2FyZC5yZWNlaXZlQXR0YWNrKHRlbXB4Y29vcmQsIHRlbXB5Y29vcmQpO1xuICAgIGNvbnN0IGFsbHBsYXllcnNzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXJzcXVhcmVcIik7XG4gICAgYWxscGxheWVyc3NxdWFyZXMuZm9yRWFjaCgocGxheWVyc3F1YXJlKSA9PiB7XG4gICAgICBcbiAgICAgIGlmIChwbGF5ZXJzcXVhcmUuaWQgPT09IGNvb3JkKSB7XG4gICAgICAgIC8vIExPT1AgVEhST1VHSFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFBsYXllcmJvYXJkLnNoaXBBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICBsZXQgaiA9IDA7XG4gICAgICAgICAgICBqIDwgUGxheWVyYm9hcmQuc2hpcEFycmF5W2ldLnNoaXBzQ29vcmRpbmF0ZXNBcnJheS5sZW5ndGg7XG4gICAgICAgICAgICBqICs9IDFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgcGxheWVyc3F1YXJlLmlkICE9PVxuICAgICAgICAgICAgICBQbGF5ZXJib2FyZC5zaGlwQXJyYXlbaV0uc2hpcHNDb29yZGluYXRlc0FycmF5W2pdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGVtcGVuZG9mYXJyYXkgPSBQbGF5ZXJib2FyZC5TcXVhcmVzSGl0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgY29tcHV0ZXJndWVzcy50ZXh0Q29udGVudCA9IGBNaXNzZWQ6ICR7XG4gICAgICAgICAgICAgICAgUGxheWVyYm9hcmQuU3F1YXJlc0hpdFt0ZW1wZW5kb2ZhcnJheSAtIDFdXG4gICAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgICBwbGF5ZXJzcXVhcmUuY2xhc3NMaXN0LmFkZChcImZhaWxlZGhpdFwiKTtcbiAgICAgICAgICAgICAgLy8gZGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgcGxheWVyc3F1YXJlLmlkID09PVxuICAgICAgICAgICAgICBQbGF5ZXJib2FyZC5zaGlwQXJyYXlbaV0uc2hpcHNDb29yZGluYXRlc0FycmF5W2pdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGVtcGVuZG9mYXJyYXkgPSBQbGF5ZXJib2FyZC5TcXVhcmVzSGl0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgY29tcHV0ZXJndWVzcy50ZXh0Q29udGVudCA9IGBIaXQ6ICR7XG4gICAgICAgICAgICAgICAgUGxheWVyYm9hcmQuU3F1YXJlc0hpdFt0ZW1wZW5kb2ZhcnJheSAtIDFdXG4gICAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgICBwbGF5ZXJzcXVhcmUuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3NmdWxoaXRcIik7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZGlyZWN0aW9uO1xufTtcblxuY29uc3QgcGxheWVyTW92ZSA9IChlKSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVyc3F1YXJlID0gZS50YXJnZXQ7XG4gIGNvbnN0IGNvbXB1dGVyU3F1YXJlQ2xpY2tlZENvb3Jkc1N0cmluZyA9IGUudGFyZ2V0LmlkO1xuICBjb25zdCBjb21wdXRlclNxdWFyZUNsaWNrZWRDb29yZHNBcnJheSA9XG4gICAgY29tcHV0ZXJTcXVhcmVDbGlja2VkQ29vcmRzU3RyaW5nLnNwbGl0KFwiLFwiKTtcbiAgY29uc3QgQ2xpY2tlZENvb3JkWCA9IGNvbXB1dGVyU3F1YXJlQ2xpY2tlZENvb3Jkc0FycmF5WzBdO1xuICBjb25zdCBDbGlja2VkQ29vcmRZID0gY29tcHV0ZXJTcXVhcmVDbGlja2VkQ29vcmRzQXJyYXlbMV07XG4gIGxldCB0ZW1wZW5kb2ZhcnJheSA9IDA7XG4gIHByZXZoaXRjb29yZC50ZXh0Q29udGVudCA9IENvbXB1dGVyYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICBDbGlja2VkQ29vcmRYLFxuICAgIENsaWNrZWRDb29yZFlcbiAgKTtcblxuICBpZiAoXG4gICAgcHJldmhpdGNvb3JkLnRleHRDb250ZW50ID09PVxuICAgIFwiUGxlYXNlIGVudGVyIGNvb3JkaW5hdGVzIG5vdCBwcmV2aW91c2x5IGF0dGFja2VkIVwiXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJldmhpdGNvb3JkLnRleHRDb250ZW50ID09PSBcIkF0dGFjayBNaXNzZWQhXCIpIHtcbiAgICB0ZW1wZW5kb2ZhcnJheSA9IENvbXB1dGVyYm9hcmQuU3F1YXJlc0hpdC5sZW5ndGg7XG4gICAgcmVzdWx0LnRleHRDb250ZW50ID0gYE1pc3NlZDogJHtcbiAgICAgIENvbXB1dGVyYm9hcmQuU3F1YXJlc0hpdFt0ZW1wZW5kb2ZhcnJheSAtIDFdXG4gICAgfWA7XG4gICAgcmVzdWx0LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICBjb21wdXRlcnNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiZmFpbGVkaGl0XCIpO1xuICB9IGVsc2UgaWYgKHByZXZoaXRjb29yZC50ZXh0Q29udGVudCA9PT0gXCJBdHRhY2sgTGFuZGVkIVwiKSB7XG4gICAgdGVtcGVuZG9mYXJyYXkgPSBDb21wdXRlcmJvYXJkLlNxdWFyZXNIaXQubGVuZ3RoO1xuICAgIHJlc3VsdC50ZXh0Q29udGVudCA9IGBIaXQ6ICR7Q29tcHV0ZXJib2FyZC5TcXVhcmVzSGl0W3RlbXBlbmRvZmFycmF5IC0gMV19YDtcbiAgICByZXN1bHQuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgY29tcHV0ZXJzcXVhcmUuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3NmdWxoaXRcIik7XG4gIH1cblxuICBjb25zdCBpc092ZXIgPSBDb21wdXRlcmJvYXJkLmRldGVybWluZUlmQ29uY2x1ZGVkKCk7XG4gIGlmIChpc092ZXIgPT09IHRydWUpIHtcbiAgICByZXN1bHQudGV4dENvbnRlbnQgPSBgR2FtZSBPdmVyISAke3BsYXllcnNuYW1lfSB3aW5zIWA7XG4gICAgcmVzdWx0LnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICAgIGFsbGNvbXB1dGVyc3F1YXJlcy5mb3JFYWNoKChjb21wdXRlcnNxdWFyZXMpID0+IHtcbiAgICAgIGNvbXB1dGVyc3F1YXJlcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheWVyTW92ZSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29tcHV0ZXJNb3ZlKCk7XG4gICAgY29uc3QgaXNPdmVyMSA9IFBsYXllcmJvYXJkLmRldGVybWluZUlmQ29uY2x1ZGVkKCk7XG4gICAgaWYgKGlzT3ZlcjEgPT09IHRydWUpIHtcbiAgICAgIHJlc3VsdC50ZXh0Q29udGVudCA9IGBHYW1lIE92ZXIhIENvbXB1dGVyIHdpbnMhYDtcbiAgICAgIHJlc3VsdC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICBhbGxjb21wdXRlcnNxdWFyZXMuZm9yRWFjaCgoY29tcHV0ZXJzcXVhcmVzKSA9PiB7XG4gICAgICAgIGNvbXB1dGVyc3F1YXJlcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheWVyTW92ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xuICBzdGFydGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgYWxsY29tcHV0ZXJzcXVhcmVzLmZvckVhY2goKGNvbXB1dGVyc3F1YXJlKSA9PiB7XG4gICAgY29tcHV0ZXJzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXllck1vdmUpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlc2V0QnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBhbGxwbGF5ZXJzc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyc3F1YXJlXCIpO1xuXG4gIGFsbHBsYXllcnNzcXVhcmVzLmZvckVhY2goKHBsYXllcnNxdWFyZSkgPT4ge1xuICAgIHBsYXllcnNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwic3VjY2Vzc2Z1bGhpdFwiKTtcbiAgICBwbGF5ZXJzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcImZhaWxlZGhpdFwiKTtcbiAgICBwbGF5ZXJzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcImJsdWVcIik7XG4gIH0pO1xuXG4gIGFsbGNvbXB1dGVyc3F1YXJlcy5mb3JFYWNoKChjb21wdXRlcnNxdWFyZSkgPT4ge1xuICAgIGNvbXB1dGVyc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5ZXJNb3ZlKTtcbiAgICBjb21wdXRlcnNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwic3VjY2Vzc2Z1bGhpdFwiKTtcbiAgICBjb21wdXRlcnNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFpbGVkaGl0XCIpO1xuICAgIGNvbXB1dGVyc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVlXCIpO1xuICB9KTtcblxuICBwcmV2aGl0Y29vcmQudGV4dENvbnRlbnQgPSBcIlwiO1xuICByZXN1bHQudGV4dENvbnRlbnQgPSBcIlwiO1xuICBjb25zdCBjb21wdXRlcmd1ZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlcmd1ZXNzXCIpO1xuICBjb21wdXRlcmd1ZXNzLnRleHRDb250ZW50ID0gXCJDb21wdXRlcidzIEd1ZXNzOiBcIjtcblxuICBzdGFydGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgUGxheWVyYm9hcmQuc2hpcEFycmF5LnNwbGljZSgwLCBQbGF5ZXJib2FyZC5zaGlwQXJyYXkubGVuZ3RoKTtcbiAgUGxheWVyYm9hcmQuU3F1YXJlc0hpdC5zcGxpY2UoMCwgUGxheWVyYm9hcmQuU3F1YXJlc0hpdC5sZW5ndGgpO1xuICBDb21wdXRlcmJvYXJkLnNoaXBBcnJheS5zcGxpY2UoMCwgQ29tcHV0ZXJib2FyZC5zaGlwQXJyYXkubGVuZ3RoKTtcbiAgQ29tcHV0ZXJib2FyZC5TcXVhcmVzSGl0LnNwbGljZSgwLCBDb21wdXRlcmJvYXJkLlNxdWFyZXNIaXQubGVuZ3RoKTtcbiAgUGxheWVyYm9hcmQuYXJlQWxsU2hpcHNTdW5rID0gZmFsc2U7XG4gIENvbXB1dGVyYm9hcmQuYXJlQWxsU2hpcHNTdW5rID0gZmFsc2U7XG5cbiAgY29uc3QgYWxsc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIik7XG4gIGFsbHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgfSk7XG4gIGdlbmVyYXRlQ29tcHV0ZXJTaGlwcygpO1xufTtcblxuc3RhcnRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVMb29wKTtcbnJlc2V0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldEJ1dHRvbik7XG4iLCJjb25zdCBnZXRQbGF5ZXJOYW1lID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgY29uc3QgbmFtZWJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybW5hbWVcIik7XG4gIG5hbWVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBuYW1laW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XG4gICAgY29uc3QgZG9tcGxheWVybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVybmFtZVwiKTtcblxuICAgIGlmIChuYW1laW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIG5hbWVpbnB1dC52YWx1ZSA9IFwiUGxheWVyXCI7XG4gICAgfVxuXG4gICAgZG9tcGxheWVybmFtZS50ZXh0Q29udGVudCA9IG5hbWVpbnB1dC52YWx1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnN0IGxhc3RHdWVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyZ3Vlc3Nlc1wiKTtcbiAgICBsYXN0R3Vlc3QudGV4dENvbnRlbnQgPSBgJHtuYW1laW5wdXQudmFsdWV9J3MgTGFzdCBHdWVzczpgXG4gICAgcmV0dXJuIG5hbWVpbnB1dC52YWx1ZTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVBsYXllckJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJib2FyZGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllcmJvYXJkXCIpO1xuICBwbGF5ZXJib2FyZGRpdi5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZCk7XG5cbiAgZm9yIChsZXQgaSA9IDk7IGkgPj0gLTE7IGkgLT0gMSkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG5cbiAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgIGZvciAobGV0IGogPSAtMTsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKGogPT09IC0xKSB7XG4gICAgICAgICAgY29uc3Qgc3F1YXJlbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHNxdWFyZWxhYmVsLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVsYWJlbFwiKTtcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc3F1YXJlbGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBzcXVhcmVsYWJlbC5jbGFzc0xpc3QuYWRkKFwic3F1YXJlbGFiZWxcIik7XG4gICAgICAgICAgc3F1YXJlbGFiZWwudGV4dENvbnRlbnQgPSBgJHtqfWA7XG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZWxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChqID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBzcXVhcmVsYWJlbC5jbGFzc0xpc3QuYWRkKFwic3F1YXJlbGFiZWxcIik7XG4gICAgICAgICAgc3F1YXJlbGFiZWwudGV4dENvbnRlbnQgPSBgJHtpfWA7XG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZWxhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwicGxheWVyc3F1YXJlXCIpO1xuICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtqfSwke2l9YCk7XG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy9cbiAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59O1xuXG5jb25zdCBnZW5lcmF0ZUNvbXB1dGVyQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVyYm9hcmRkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllcmJvYXJkXCIpO1xuICBjb21wdXRlcmJvYXJkZGl2LmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcblxuICBmb3IgKGxldCBpID0gOTsgaSA+PSAtMTsgaSAtPSAxKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAvLyBmb3JcbiAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgIGZvciAobGV0IGogPSAtMTsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKGogPT09IC0xKSB7XG4gICAgICAgICAgY29uc3Qgc3F1YXJlbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHNxdWFyZWxhYmVsLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVsYWJlbFwiKTtcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc3F1YXJlbGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBzcXVhcmVsYWJlbC5jbGFzc0xpc3QuYWRkKFwic3F1YXJlbGFiZWxcIik7XG4gICAgICAgICAgc3F1YXJlbGFiZWwudGV4dENvbnRlbnQgPSBgJHtqfWA7XG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZWxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChqID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBzcXVhcmVsYWJlbC5jbGFzc0xpc3QuYWRkKFwic3F1YXJlbGFiZWxcIik7XG4gICAgICAgICAgc3F1YXJlbGFiZWwudGV4dENvbnRlbnQgPSBgJHtpfWA7XG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZWxhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtqfSwke2l9YCk7XG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy9cbiAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59O1xuXG5leHBvcnQgeyBnZXRQbGF5ZXJOYW1lLCBnZW5lcmF0ZVBsYXllckJvYXJkLCBnZW5lcmF0ZUNvbXB1dGVyQm9hcmQgfTtcbiJdLCJuYW1lcyI6WyJHYW1lYm9hcmQiLCJhcmVBbGxTaGlwc1N1bmsiLCJTcXVhcmVzSGl0Iiwic2hpcEFycmF5IiwicGxhY2VTaGlwIiwibGVuZ3RoIiwieGNvb3JkIiwieWNvb3JkIiwicG9zaXRpb24iLCJuZXdTaGlwIiwidGVtcHgiLCJ0ZW1weSIsInNoaXBzQ29vcmRpbmF0ZXNBcnJheSIsImkiLCJzaGlwQ29vcmRpbmF0ZXMiLCJwdXNoIiwiaGl0cyIsImhpdCIsImlzU3VuayIsImxlbmd0aE9mU2hpcCIsImhpdHNPZlNoaXAiLCJzdW5rU3RhdHVzIiwiU2hpcCIsInJlY2VpdmVBdHRhY2siLCJ3YXNIaXQiLCJtZXNzYWdlIiwiY29vcmRpbmF0ZXMiLCJpbmNsdWRlcyIsImZvckVhY2giLCJzaGlwIiwic2VsZWN0ZWRTaGlwQ29vcmRpbmF0ZXMiLCJkZXRlcm1pbmVJZkNvbmNsdWRlZCIsInN1bmtlblNoaXBzIiwicGxheWVyc25hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hbWVpbnB1dCIsImRvbXBsYXllcm5hbWUiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsInBsYXllcmJvYXJkZGl2IiwicGxheWVyQm9hcmQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJyb3ciLCJqIiwic3F1YXJlbGFiZWwiLCJzcXVhcmUiLCJzZXRBdHRyaWJ1dGUiLCJnZW5lcmF0ZVBsYXllckJvYXJkIiwiUGxheWVyYm9hcmQiLCJjb21wdXRlcmJvYXJkZGl2IiwiZ2VuZXJhdGVDb21wdXRlckJvYXJkIiwiQ29tcHV0ZXJib2FyZCIsInN0YXJ0YnV0dG9uIiwiZGlzYWJsZWQiLCJyZXNldGJ1dHRvbiIsInJlc3VsdCIsInByZXZoaXRjb29yZCIsImFsbGNvbXB1dGVyc3F1YXJlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXJlY3Rpb25BcnJheSIsImRpcmVjdGlvbiIsImdlbmVyYXRlQ29tcHV0ZXJTaGlwcyIsInRlbXB4Y29vcmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1weWNvb3JkIiwidGVtcHBvcyIsInRlbXBwb3NpdGlvbiIsIm92ZXJsYXBwZWRzdGF0dXMiLCJzaGlwY29vcmQiLCJjb21wdXRlcnNxdWFyZSIsImFycmF5IiwiaWQiLCJzaGlwc3BsYWNlZCIsImUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidGFyZ2V0IiwidGVtcGxlbmd0aCIsImNoaWxkRWxlbWVudENvdW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjb250YWlucyIsImFsbHNxdWFyZXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0cmluZ2xlbiIsImdldERhdGEiLCJ4b2ZmIiwieW9mZiIsInBvcyIsImxlbiIsInBhcnNlSW50Iiwib2Zmc2V0WFNxdWFyZSIsIm9mZnNldFlTcXVhcmUiLCJ0ZW1wb09mZnNldFlTcXVhcmUiLCJjZWlsIiwiY29vcmRhcnJyYXkiLCJzcGxpdCIsImZpbmFseGNvb3JkIiwiZmluYWx5Y29vcmQiLCJ2aXNpYmlsaXR5IiwibGFzdEluZGV4IiwibGFzdFNoaXAiLCJzcXVhciIsImdlbmVyYXRlVmlzdWFsU2hpcHMiLCJjb21wdXRlck1vdmUiLCJjb21wdXRlcmd1ZXNzIiwieG9yeSIsInBsdXNvcm1pbnVzIiwidGVtcGVuZG9mYXJyYXkiLCJjb29yZGFycmF5IiwiY29vcmR4IiwiY29vcmR5IiwidW5kZWZpbmVkIiwiY29vcmQiLCJzcGxpY2UiLCJwbGF5ZXJzcXVhcmUiLCJwbGF5ZXJNb3ZlIiwiY29tcHV0ZXJTcXVhcmVDbGlja2VkQ29vcmRzQXJyYXkiLCJDbGlja2VkQ29vcmRYIiwiQ2xpY2tlZENvb3JkWSIsImNvbG9yIiwiY29tcHV0ZXJzcXVhcmVzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=
