import * as Yup from "yup";

class ProductController {
  async store(request, response) {
    console.log();
    const schema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category: Yup.string().required(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name, price, category } = request.body;
    const image = request.file;

    console.log({ name, price, category, image });

    return response.status(201).json({ ok: true });
  }
}

export default new ProductController();
