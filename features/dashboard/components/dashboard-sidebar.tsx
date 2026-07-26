import Image from 'next/image';
import Link from 'next/link';

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	SidebarSeparator,
} from '@/components/ui/sidebar';
import { UserMenuUser } from '@/features/auth/components/user-menu';
import { DASHBOARD_ROUTES } from '../lib/route';
import { DashboardNav } from './dashboard-nav';
import { SidebarUserButton } from './sidebar-user-button';

type DashboardSidebarProps = {
	user: UserMenuUser;
	plan?: string;
};

export function DashboardSidebar({
	user,
	plan = 'Pro',
}: DashboardSidebarProps) {
	return (
		<Sidebar collapsible="icon">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							tooltip="Code Review"
							render={
								<Link href={DASHBOARD_ROUTES.overview}>
									<span className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-none bg-sidebar">
										<Image
											src="/logo.svg"
											alt="Code Reviewer"
											width={40}
											height={40}
											priority
											className="block dark:hidden"
										/>
										<Image
											src="/logo(dark).svg"
											alt="Code Reviewer"
											width={40}
											height={40}
											priority
											className="hidden dark:block"
										/>
									</span>
									<span className="grid flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
										<span className="truncate font-medium">Code Review</span>
									</span>
								</Link>
							}
						/>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<DashboardNav />
			</SidebarContent>
			<SidebarFooter>
				<SidebarSeparator />
				<SidebarUserButton
					user={user}
					plan={plan}
				/>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
