export const load =  (serverLoadEvent) => {
    console.log('Load function called in page.server.js')
    // destructuring of fetch (function)
    const { fetch, params } = serverLoadEvent
    const title = 'Take a poll'
    // const response = await fetch('$lib/polls.js')
    console.log ( params ) 
    return {
        title,
        poll_id: params.poll_id
    }
}