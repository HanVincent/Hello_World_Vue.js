<template>
    <div class="col-md-4" @click="switchCharacters">
    <div class="character-card">
        <div class="card-block">
            <h4 class="card-title">{{character.name}}</h4>
            <p class="card-text">{{character.height}} cm</p>
            <p class="card-text">{{character.mass}} kg</p>
            <p class="card-text">{{character.hair_color}}</p>
            <p class="card-text">{{character.eye_color}}</p>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                character: {}
            }
        },
        methods: {
            fetchCharacters(id) {
                fetch(`http://swapi.co/api/people/${id}`, {
                    method: 'GET'
                })
                .then(response => response.json())
                .then(json => this.character = json)
            },
            switchCharacters() {
                let random_id = Math.floor(Math.random() * 80) + 1
                this.fetchCharacters(random_id);
            }
        },
        created() {
            this.fetchCharacters(this.id);
        }
    }
</script>