const t1 = document.querySelector(`#t1`)
const t2 = document.querySelector(`#t2`)

const txt1 = `จัญไร`
const txt2 = `เจริญ`

const hiddenchar = [`จ`,`ร`]
const skipchar = [`ิ`,`ั`]

for (let i = 0; i < txt1.length; i++) {
    if (hiddenchar.includes(txt1.at(i))) {
        continue
    } else if (skipchar.includes(txt1.at(i))) {
        t1.innerHTML += `<span class="hidden">${txt1.at(i)}</span>`
    } else {
        t1.innerHTML += `<span>${txt1.at(i)}</span>`
    }
}
for (let i = 0; i < txt2.length; i++) {
    if (hiddenchar.includes(txt2.at(i))) {
        continue
    } else if (skipchar.includes(txt2.at(i))) {
        t2.innerHTML += `<span class="hidden" style="">
            ${txt2.at(i)}
            </span>`
    } else {
        t2.innerHTML += `<span>${txt2.at(i)}</span>`
    }
}