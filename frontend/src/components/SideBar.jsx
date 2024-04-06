import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";

export default function Sidebar({ showMenu, setShowMenu }) {
    const ToggleClose = () => {
        setShowMenu(!showMenu);
    };
    return (
        <>
            <div
                className=' absolute z-40 w-screen h-screen bg-black/25 '
                onClick={() => setShowMenu(false)}
            ></div>
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
                        <ListItemPrefix></ListItemPrefix>
                        Dashboard
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='red'
                                viewBox='0 0 24 24'
                                stroke-width='1.5'
                                stroke='currentColor'
                                class='w-6 h-6'
                            >
                                <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                                />
                            </svg>
                        </ListItemPrefix>
                        Volunteer
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix></ListItemPrefix>
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
                        <ListItemPrefix></ListItemPrefix>
                        Settings
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix></ListItemPrefix>
                        Log Out
                    </ListItem>
                </List>
                <p></p>
            </Card>
        </>
    );
}
