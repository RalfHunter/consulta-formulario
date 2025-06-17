import './style.css'
import type { Usuario } from './usuario'
const app = document.querySelector<HTMLDivElement>('#app')!
const mode = app.querySelector<HTMLDivElement>('.modo')!
const info = app.querySelector<HTMLDivElement>('.info')!
const celest = mode.querySelector<HTMLImageElement>('img')!
const urlLocal = window.location.href


mode.addEventListener('click', ()=>{
    info.classList.toggle('dark')
    const dados = app.querySelectorAll<HTMLDivElement>('.dados')!
    app.classList.toggle('dark')
    dados.forEach(dado => {
        dado.classList.toggle('dark')
    })
    celest.src = celest.src === urlLocal+"public/moon-star%201.svg" ? urlLocal+"public/sun-moon%201.svg": urlLocal+"public/moon-star%201.svg" 

})

const inscritos = await fetch(`http://localhost:3000/usuarios`)
const usuarios:Usuario[] = await inscritos.json()
console.log(usuarios)
usuarios.forEach(usuario => {
    const dados = document.createElement('div')!
    const id = document.createElement('label')!
    const nome = document.createElement('label')!
    const email = document.createElement('label')!
    const sexo = document.createElement('label')!
    const curso = document.createElement('label')!
    const obs = document.createElement('label')!
    id.innerHTML =`<strong>ID: </strong>${usuario.id}`
    nome.innerHTML = `<strong>Nome: </strong>${usuario.name}`
    email.innerHTML = `<strong>E-mail: </strong>${usuario.email}`
    sexo.innerHTML = `<strong>Sexo: </strong>${usuario.sexo}`
    curso.innerHTML = `<strong>Curso: </strong>${usuario.curso}`
    obs.innerHTML = `<strong>Observação: </strong>${usuario.obs}`
    dados.appendChild(id)
    dados.appendChild(nome)
    dados.appendChild(email)
    dados.appendChild(sexo)
    dados.appendChild(curso)
    dados.appendChild(obs)
    dados.className = 'dados'
    app.appendChild(dados)
})