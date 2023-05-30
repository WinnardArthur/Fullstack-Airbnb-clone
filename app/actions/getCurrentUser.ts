import { getServerSession } from "next-auth/next";

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '@/app/lib/prismadb';
