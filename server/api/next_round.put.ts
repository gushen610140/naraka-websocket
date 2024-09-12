export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  event.context?.appSocket.emit("next_round", body)
})