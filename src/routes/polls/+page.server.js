import {polls} from "$lib/data/polls.js"

export const load =  (serverLoadEvent) => {
    const title = 'List of Polls'
    return {
        title, 
        questions: polls.map((poll)=>poll.question)
    }
}