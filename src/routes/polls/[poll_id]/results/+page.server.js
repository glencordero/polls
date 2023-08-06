import {polls} from "$lib/data/polls.js"

export const load = (serverLoadEvent) => {
    const { fetch, params } = serverLoadEvent
    return {
        poll: polls.find((poll) => poll.id == params.poll_id)
    }
}
