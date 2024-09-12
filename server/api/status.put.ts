export default defineEventHandler((event) => {
  event.context?.appSocket.emit("status_update")
})