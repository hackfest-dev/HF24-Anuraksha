import { useNavigate } from "react-router-dom";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { ImInfo } from "react-icons/im";

import { useTranslation } from "react-i18next";
import LanguageDropdown from "./Language Dropdown";

export default function Sidebar({ showMenu, setShowMenu }) {
    const { t } = useTranslation();
    const ToggleClose = () => {
        setShowMenu(!showMenu);
    };
    const navigate = useNavigate();
    return (
        <>
            <div
                className=' absolute z-40 w-screen h-screen bg-black/25 '
                onClick={() => setShowMenu(false)}
            ></div>
            <Card className='absolute h-[calc(100vh)] bg-background-color w-full max-w-[70%] p-4 z-50 shadow-xl shadow-blue-gray-900/7'>
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
                    <ListItem
                        onClick={() => {
                            navigate("/home");
                            setShowMenu(false);
                        }}
                    >
                        <ListItemPrefix></ListItemPrefix>
                        <FaHome className='text-primary mr-1' />
                        Home
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            navigate("/volunteer");
                            setShowMenu(false);
                        }}
                    >
                        <ListItemPrefix></ListItemPrefix>
                        <IoMdPerson className='text-primary mr-1' />
                        Volunteer
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            navigate("/inbox");
                            setShowMenu(false);
                        }}
                    >
                        <ListItemPrefix></ListItemPrefix>
                        <MdOutlineMessage className='text-primary mr-1' />
                        Inbox
                        <ListItemSuffix>
                            <Chip
                                value='5'
                                size='sm'
                                variant='ghost'
                                className='rounded-full text-red-900'
                            />
                        </ListItemSuffix>
                    </ListItem>

                    <ListItem
                        onClick={() => {
                            navigate("/settings");
                            setShowMenu(false);
                        }}
                    >
                        <ListItemPrefix></ListItemPrefix>
                        <MdOutlineSettings className='text-primary mr-1' />
                        Settings
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            navigate("/about");
                            setShowMenu(false);
                        }}
                    >
                        <ListItemPrefix></ListItemPrefix>
                        <ImInfo className='text-primary mr-1' />
                        About
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            navigate("/");
                            setShowMenu(false);
                        }}
                    >
                        <ListItemPrefix></ListItemPrefix>
                        <MdOutlineLogout className=' font-extrabold text-primary mr-1' />
                        Log Out
                    </ListItem>
                </List>
                <p></p>
            </Card>
        </>
    );
}
