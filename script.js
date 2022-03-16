const copoPequeno = document.querySelectorAll('.copo-pequeno')
const litros = document.getElementById('litros')
const porcentagem = document.getElementById('porcentagem')
const quantidade = document.getElementById('quantidade')

AtualizeCopoGrande()

copoPequeno.forEach((copo, idx) => {
    copo.addEventListener('click', () => DestaqueCopos(idx))
})

function DestaqueCopos(idx) {
    if (idx===7 && copoPequeno[idx].classList.contains("full")) idx--;
    else if(copoPequeno[idx].classList.contains('full') && !copoPequeno[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    copoPequeno.forEach((copo, idx2) => {
        if(idx2 <= idx) {
            copo.classList.add('full')
        } else {
            copo.classList.remove('full')
        }
    })

    AtualizeCopoGrande()
}

function AtualizeCopoGrande() {
    const fullCups = document.querySelectorAll('.copo-pequeno.full').length
    const totalCups = copoPequeno.length

    if(fullCups === 0) {
        porcentagem.style.visibility = 'hidden'
        porcentagem.style.height = 0
    } else {
        porcentagem.style.visibility = 'visible'
        porcentagem.style.height = `${fullCups / totalCups * 330}px`
        porcentagem.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        quantidade.style.visibility = 'hidden'
        quantidade.style.height = 0
    } else {
        quantidade.style.visibility = 'visible'
        litros.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
