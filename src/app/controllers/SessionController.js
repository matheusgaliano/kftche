class SessionController {
  async store(request, response) {
    return response.status(200).json({ ok: true });
  }
}

export default new SessionController();
