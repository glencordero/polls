import {polls} from "$lib/data/polls.js"

export const load =  (serverLoadEvent) => {
    console.log('Load function called in page.server.js')
    // destructuring of fetch (function)
    const { fetch, params } = serverLoadEvent
    const title = 'Take a poll'
    // const response = await fetch('$lib/polls.js')
    console.log ( params ) 
    return {
        title,
        // get poll id from params
        // find poll from the poll id
        poll: polls.find((poll) => poll.id == params.poll_id)
    }
}

