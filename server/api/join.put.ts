export default defineEventHandler((event) => {
    event.context?.appSocket.emit("player_update")
  }
)