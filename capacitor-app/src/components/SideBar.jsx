import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar({ showMenu, setShowMenu }) {
    const ToggleClose = () => {
        setShowMenu(!showMenu);
    };
    return (
        <Card className='absolute h-[calc(100vh)] bg-background-color w-full max-w-[60%] p-4 z-50 shadow-xl shadow-blue-gray-900/7'>
            <div className='flex justify-between'>
                <div
                    className=' pt-2'
                    onClick={ToggleClose}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18 18 6M6 6l12 12'
                        />
                    </svg>
                </div>
                <div className='mb-2 p-4 pt-2 text-red-900 text-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-12 h-12'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                        />
                    </svg>

                    <p>User</p>
                </div>
            </div>
            <List>
                <ListItem>
                    <ListItemPrefix>
                        <PresentationChartBarIcon className='h-5 w-5 text-red-900' />
                    </ListItemPrefix>
                    Dashboard
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <ShoppingBagIcon className='h-5 w-5 text-red-900' />
                    </ListItemPrefix>
                    Volunteer
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <InboxIcon className='h-5 w-5 text-red-900' />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip
                            value='14'
                            size='sm'
                            variant='ghost'
                            className='rounded-full text-red-900'
                        />
                    </ListItemSuffix>
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className='h-5 w-5 text-red-900' />
                    </ListItemPrefix>
                    Profile
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className='h-5 w-5 text-red-900' />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className='h-5 w-5 text-red-900' />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
            <p></p>
        </Card>
    );
}
