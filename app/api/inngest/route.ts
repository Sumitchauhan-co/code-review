import { reviewPullRequest } from '@/features/reviews/server/review-pr-function';
import { serve } from 'inngest/next';
import { syncRepoCodebaseFunction } from '@/features/repo-sync/server/repo-sync-function';
import { inngest } from '../../../features/inngest/client';
import { processTask } from '../../../features/inngest/function';

export const { GET, POST, PUT } = serve({
	client: inngest,
	functions: [processTask, reviewPullRequest, syncRepoCodebaseFunction],
});
