import { saveInstallation } from '@/features/github/server/installation';
import { getServerSession } from '@/features/auth/actions';
import { NextResponse } from 'next/server';
import { DASHBOARD_ROUTES } from '@/features/dashboard/lib/routes';

function buildSignInCallbackUrl(installationId: string | null): string {
	if (installationId) {
		return `/api/github/callback?installation_id=${installationId}`;
	}

	return DASHBOARD_ROUTES.github;
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const installationId = searchParams.get('installation_id');

	const session = await getServerSession();
	if (!session) {
		const callbackUrl = buildSignInCallbackUrl(installationId);
		return NextResponse.redirect(
			new URL(
				`/sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}`,
				request.url,
			),
		);
	}

	if (installationId) {
		await saveInstallation(session.user.id, Number(installationId));
	}

	return NextResponse.redirect(new URL(DASHBOARD_ROUTES.github, request.url));
}
