import { z } from 'zod';

const JobSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 characters long' }),
  job: z.string().min(2, { message: 'Job position must be at least 2 characters long' }),
  experience: z.string().min(1, { message: 'Please select years of experience' }),
  resume: z.instanceof(File).refine(file => file.size <= 1 * 1024 * 1024, { message: 'File size must be less than 1MB' })
                .refine(file => ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type), { message: 'File type must be PDF or DOC' }),

});

export { JobSchema };