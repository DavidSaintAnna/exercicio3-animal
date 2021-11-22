function fillHeader() {
    document.getElementById("header-div").style.backgroundColor = "#23232e";
}

function fillMainSection() {
    document.getElementById("home_section").innerHTML = ` 
    <p class="me_wolf">
        Eu e o lobo
    </p>
    <p class="text_1">
        O lobo é o meu animal favorito, às vezes ele   é individual outras vezes ele anda em
        matilha.<br>Desse modo,o lobo é um animal de alta adaptabilidade.
    </p>`
}

function mainWolf() {
    document.getElementById("image_wolf").src = "wolf.jpg";
}

function species() {
    document.getElementById("species").innerHTML = `
    <p class="me_wolf2">Espécie</p>
    <div class="direction_2">
        <div class="columns">
            <img src="wolf 3.jpg" class="wolf">
        </div>
        <div class="columns">
            <img src="wolf2.jpg" class="wolf">
        </div>
        <div class="columns">
            <img src="wolf 4.jpeg" class="wolf">
        </div>
    </div>
    <div>
        <p class="text_2">Essa espécie é o lobo do ártico, Possuem de 63 a 79 cm na altura da cernelha.<br>
        Pesam cerca de 45 kg e tem até 1,5 metros de comprimento.</p>
    </div>`
}

function habitat() {
    document.getElementById("habitat").innerHTML = `
    <p class="me_wolf3">Habitat</p>
    <p class="text_3">Habita o Arquipélago Ártico Canadense, desde a Ilha Melville até a Ilha Ellesmere,<br>
    sobrevivendo à baixas temperaturas.</p>
    <img src="habitat.jpg" class="habitat">`
}