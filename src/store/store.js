import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            clickedButtons: [],
            scores: {
                team1: 0,
                team2: 0,
            },
            contestsRus: [
                { name: 'Сальте Мортале', description: 'Отбиванием от стола — закинуть карандаши в стакан', timestampHrefHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=8nQIjPtfFAoaumUH&amp;start=351', imgSrc: new URL('@/assets/Salte_Mortale.png', import.meta.url).href, number: 1 },
                { name: 'Свой среди чужих', description: 'Не прикасаясь к шарикам, нужно сдуть из тарелки все оранжевые шарики (оставить только 3 белых)', timestampHrefHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=mP2-oeOdiB2RXi3Z&amp;start=405', imgSrc: new URL('@/assets/Salte_Mortale.png', import.meta.url).href, number: 2 },
                { name: 'Пирамида', description: 'Собрать семиэтажную пирамиду из стаканчиков (в основании 7 штук)', timestampHrefHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=csW9OxjMV4hNPX_b&amp;start=382', number: 3 },
                { name: 'All in', description: 'Ударив по фишке нужно забросить ее в стакан (три стакана, три фишки)', timestampHrefHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=WMGbAJGjo7FUTQJi&amp;start=12', number: 4 },
                { name: 'Повелитель стихии', description: '10 попыток — подкинуть бутылку так, чтобы бутылка сделала в воздухе оборот и встала на дно', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=7hxdFXaM_dpmBcAg&amp;start=24', number: 5 },
                { name: 'Пиковая дама', description: 'Стреляя Резинкой из пальца участник должен сбить карты которые прикреплены на прищепках (3,7, А)', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=49ApmDKdVhqbhQFl&amp;start=42', number: 6 },
                { name: 'Подъем —переворот', description: 'Подбросить шарик который стоит на перевернутом бокале так, чтобы он попал внутрь бокала (три бокала)', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=6LNcyUmqiyIDUVu8&amp;start=54', number: 7 },
                { name: 'Солд аут', description: 'Отскоком от стола забрасывать шарики в лоток для яиц', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=LT9DcRgJFmeTVXxr&amp;start=69', number: 8 },
                { name: 'Плавающий маяк', description: 'Пустые железные бутылки от напитков нужно ставить на воду в салатницу таким образом чтобы они не упали', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=EPhA3VSAxgEgQ909&amp;start=86', number: 9 },
                { name: 'Идеальный угол', description: 'Отпить из банки необходимое количество чтобы поставить банку на ребро', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=QuVVL01sFky3jm8c&amp;start=119', number: 10 },
                { name: 'Однажды в Италии', description: 'Удерживая во рту спагетти участник должен набрать на нее 6 макарон', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=GiGh_EofhywtRPoC&amp;start=132', number: 11 },
                { name: 'Револьвер', description: 'Бросить шарик на стол, чтобы он попал в стакан (6 шариков)', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=bHv1hN1x38jfYdnL&amp;start=143', number: 12 },
                { name: 'Дабл трабл', description: 'Участник должен склееный стаканчик ударом об стол поместить на горлышко шампанского, после этого закинуть в него шарик (повторить все два раза)', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=BPHaTF8FCZWXWp5q&amp;start=209', number: 13 },
                { name: 'Вавилон', description: 'Задача участника ударить шарик об стол, поймать стаканом шарик, далее переместить нижний стакан наверх башни, нужно собрать 6 Шариков в 6 стаканов', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=cqFgXKvI3r5svCjY&amp;start=262', number: 14 },
                { name: 'Буря в бокале', description: 'Держа бокал вверх дном необходимо раскрутить в нем конфету так, чтобы она не падала и переместить в миску на другом столе, для прохождения испытания необходимо 3 конфеты', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=ZpoTanL6nDjUfK8E&amp;start=278', number: 15 },
                { name: 'Бросок кобры', description: 'Участник должен положить 2 карандаша на тыльную поверхность руки, подбросить и поймать, поэтапно увеличивая количество, в финале нужно поймать 10 штук (5*2 = 10)', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=1VvG0YXOLBr3ATNl&amp;start=296', number: 16 },
            ],
            contestsEn: [
                { name: 'Salte Mortale', description: 'Bouncing off the table — throw pencils into a cup', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=8nQIjPtfFAoaumUH&amp;start=351', imgSrc: new URL('@/assets/Salte_Mortale.png', import.meta.url).href, number: 1 },
                { name: 'One of Our Own', description: 'Without touching the balls, blow all the orange balls off the plate (leave only 3 white ones)', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=mP2-oeOdiB2RXi3Z&amp;start=405', imgSrc: new URL('@/assets/One_of_OurOwn.png', import.meta.url).href, number: 2 },
                { name: 'Pyramid', description: 'Build a seven-story pyramid from cups (7 in the base)', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=csW9OxjMV4hNPX_b&amp;start=382', imgSrc: new URL('@/assets/Pyramid.png', import.meta.url).href, number: 3 },
                { name: 'All In', description: 'Hit a chip and throw it into a cup (three cups, three chips)', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=WMGbAJGjo7FUTQJi&amp;start=12', imgSrc: new URL('@/assets/All_In.png', import.meta.url).href, number: 4 },
                { name: 'Master of the Element', description: '10 attempts — toss the bottle so that it makes a turn in the air and stands on the bottom', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=7hxdFXaM_dpmBcAg&amp;start=24', imgSrc: new URL('@/assets/Master_of_the_Element.png', import.meta.url).href, number: 5 },
                { name: 'Queen of Spades', description: 'Shooting with a rubber band from the finger, the participant must knock down cards attached to clothespins (3, 7, A)', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=49ApmDKdVhqbhQFl&amp;start=42', imgSrc: new URL('@/assets/Queen_of_Spades.png', import.meta.url).href, number: 6 },
                { name: 'Lift-Flip', description: 'Toss a ball that stands on an overturned glass so that it lands inside the glass (three glasses)', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=6LNcyUmqiyIDUVu8&amp;start=54', imgSrc: new URL('@/assets/Lift-Flip.png', import.meta.url).href, number: 7 },
                { name: 'Sold Out', description: 'Bounce balls off the table into the egg tray', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=LT9DcRgJFmeTVXxr&amp;start=69', imgSrc: new URL('@/assets/Sold_Out.png', import.meta.url).href, number: 8 },
                { name: 'Floating Beacon', description: 'Empty iron drink bottles should be placed on the water in a salad bowl so that they do not fall', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=EPhA3VSAxgEgQ909&amp;start=86', imgSrc: new URL('@/assets/Floating_Beacon.png', import.meta.url).href, number: 9 },
                { name: 'Perfect Angle', description: 'Drink the required amount from a can to balance the can on the edge', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=QuVVL01sFky3jm8c&amp;start=119', imgSrc: new URL('@/assets/Perfect_Angle.png', import.meta.url).href, number: 10 },
                { name: 'Once in Italy', description: 'Holding spaghetti in the mouth, the participant must thread 6 macaroni onto it', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=GiGh_EofhywtRPoC&amp;start=132', imgSrc: new URL('@/assets/Once_in_Italy.png', import.meta.url).href, number: 11 },
                { name: 'Revolver', description: 'Throw the ball on the table to make it land in a cup (6 balls)', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=bHv1hN1x38jfYdnL&amp;start=143', imgSrc: new URL('@/assets/Revolver.png', import.meta.url).href, number: 12 },
                { name: 'Double Trouble', description: 'The participant must place a glued cup on the neck of champagne with a hit on the table, then throw a ball into it (repeat twice)', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=BPHaTF8FCZWXWp5q&amp;start=209', imgSrc: new URL('@/assets/Double_Trouble.png', import.meta.url).href, number: 13 },
                { name: 'Babylon', description: "The participant's task is to hit the ball on the table, catch the ball with the glass, then move the bottom glass to the top of the tower. The goal is to collect 6 balls in 6 glasses.", timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=cqFgXKvI3r5svCjY&amp;start=262', imgSrc: new URL('@/assets/Babylon.png', import.meta.url).href, number: 14 },
                { name: 'Storm in a Glass', description: 'Holding the glass upside down, it is necessary to spin a candy inside it in such a way that it does not fall and transfer it to a bowl on another table. To pass the challenge, you need 3 candies.', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=ZpoTanL6nDjUfK8E&amp;start=278', imgSrc: new URL('@/assets/Storm_In_A_Glass.png', import.meta.url).href, number: 15 },
                { name: 'Cobra Throw', description: 'The participant must place 2 pencils on the back of the hand, toss and catch them, gradually increasing the quantity. In the end, they need to catch 10 pieces (5*2 = 10).', timestampHref: 'https://www.youtube.com/embed/ji4Se4EhGI0?si=1VvG0YXOLBr3ATNl&amp;start=296', imgSrc: new URL('@/assets/Cobra_Throw.png', import.meta.url).href, number: 16 },

            ]
        }
    },
    mutations: {
        setClickedButtons(state, clickedButtons) {
          state.clickedButtons = clickedButtons;
        },
        setUpdatedScores(state, updatedScores) {

            if (updatedScores && updatedScores.result === 'victory') {
                if (updatedScores.team == 1) {
                    state.scores.team1++
                }
                if (updatedScores.team == 2) {
                    state.scores.team2++
                }
            }

        },

      },
      actions: {
        updateScores({ commit }, updatedScores) {
        console.log("Экшен updateScores", updatedScores)
          commit('setUpdatedScores', updatedScores);
        },
      },
      getters: {
        getContestsRus: (state) => state.contestsRus,
        getContestsEn: (state) => state.contestsEn,
        getScores: (state) => state.scores,
      }
})

export default store;