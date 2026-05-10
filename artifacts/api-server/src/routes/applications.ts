import { Router, type IRouter, type Request, type Response } from "express";
import { z } from "zod";

const router: IRouter = Router();

const ApplicationSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  expertise: z.string().min(1).max(500),
  concept: z.string().min(1).max(2000),
  stage: z.string().optional(),
});

type Application = z.infer<typeof ApplicationSchema> & {
  id: number;
  submittedAt: string;
};

const applications: Application[] = [];
let nextId = 1;

router.post("/applications", (req: Request, res: Response) => {
  const parsed = ApplicationSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid submission", details: parsed.error.flatten() });
    return;
  }

  const application: Application = {
    id: nextId++,
    ...parsed.data,
    submittedAt: new Date().toISOString(),
  };
  applications.push(application);

  req.log.info({ applicationId: application.id, email: application.email }, "New application received");

  res.status(201).json({ success: true, id: application.id });
});

router.get("/applications", (_req: Request, res: Response) => {
  res.json({ count: applications.length, applications });
});

export default router;
