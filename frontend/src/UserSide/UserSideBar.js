import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { MdChecklist } from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GrCompliance } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MicIcon from "@mui/icons-material/Mic";
import logo from "../Logos/logo.png";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Modal from "@mui/material/Modal";
import HelplineComponent from "../components/HelplineData"; // Import the HelplineComponent

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#15181C",
  border: "1px solid ",
  boxShadow: 24,
  borderRadius: 10,
  color: "white",
  px: 4,
  py: 5,
};

export default function Sidebar({ setLogin }) {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    setLogin(false);
    setAnchorEl(null);
    navigate("/Login");
  };

  const [open, setOpen] = useState(false);
  const handleVoiceNavOpen = () => setOpen(true);
  const handleVoiceNavClose = () => setOpen(false);

  const [redirectUrl, setRedirectUrl] = useState("");
  const commands = [
    {
      command: ["Go to * page", "Go to *", "Open * page", "Open *"],
      callback: (redirectPage) =>
        setRedirectUrl(encodeURIComponent(redirectPage)),
    },
  ];
  const { transcript } = useSpeechRecognition({ commands });

  const list = () => {
    const listItemsData = [
      {
        to: "/Blog",
        icon: <GrCompliance className="mr-3 " size={25} />,
        text: "Blogs",
      },
      {
        to: "http://localhost:8502/",
        icon: <GrCompliance className="mr-3 " size={25} />,
        text: "Text-ChatBot",
      },

      {
        to: "/Community",
        icon: <MdChecklist className="mr-3 " size={25} />,
        text: "Community",
      },
      {
        to: "/questionare",
        icon: <HiMagnifyingGlass className="mr-3 " size={25} />,
        text: "Questionare",
      },
      {
        to: "http://localhost:8501",
        icon: <FaPeopleGroup className="mr-3 " size={25} />,
        text: "Report",
      },
    ];

    return (
      <div
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        className="p-5 my-6  h-full flex flex-col items-center justify-between "
        style={{ maxWidth: "300px" }}
        bg-gradient-to-r
        from-blue-200
        to-blue-100
      >
        <div>
          <img src={logo} alt="trucomply logo" className="h-[40px] w-[150px]" />
          <List>
            {listItemsData.map((item, index) => (
              <ListItem
                key={index}
                className="my-5 hover:text-[#d36cdb] border-b-2"
              >
                {item.text === "Report" ? (
                  <a href={item.to} target="_blank" rel="noopener noreferrer">
                    <Button style={{ color: "black" }}>
                      {item.icon}
                      {item.text}
                    </Button>
                  </a>
                ) : (
                  <Link to={item.to}>
                    <Button style={{ color: "black" }}>
                      {item.icon}
                      {item.text}
                    </Button>
                  </Link>
                )}
              </ListItem>
            ))}
          </List>
        </div>
        <Link to="/helpline">
          <Button
            variant="contained"
            color="error"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
            onClick={() => setIsModalOpen(true)}
          >
            SOS
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <div className="w-full shadow-lg bg-gradient-to-r from-blue-200 to-blue-100">
      <Box display="flex" justifyContent="space-between" p={2}>
        <div className="flex items-center justify-center">
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon color="black" style={{ color: "#62D69C" }} />
          </Button>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            {list()} {/* Invoke the list function */}
          </Drawer>
          <img src={logo} alt="fitzen logo" className="h-[40px] w-[150px]" />
        </div>

        {/* ICONS */}
        <Box display="flex" gap="8px">
          {/* SEARCH BAR */}
          <Box
            display="flex"
            border="1px solid black"
            borderRadius="8px"
            padding="2px"
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>

            <IconButton
              onClick={handleVoiceNavOpen}
              type="button"
              sx={{ p: 1 }}
            >
              <MicIcon />
            </IconButton>

            <Modal
              open={open}
              onClose={handleVoiceNavClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <h1 className=" text-center text-2xl mb-10">
                  Voice Assisted Tab Navigation
                </h1>
                <p className="my-16">
                  Transcript: &nbsp;&nbsp;
                  <span className="text-white">{transcript}</span>{" "}
                </p>
                <div className=" flex items-center justify-center">
                  <Button
                    variant="contained"
                    className="bg-[#d36cdb] transition duration-300 hover:text-black px-5 py-2 rounded-full "
                    onClick={SpeechRecognition.startListening}
                  >
                    Start
                  </Button>
                </div>
              </Box>
            </Modal>
          </Box>

          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>

          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>

          {/* Profile dropdown */}
          <div>
            <IconButton onClick={handleClick}>
              <PersonOutlinedIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/Profile">
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              <MenuItem onClick={handleClose}>My Account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Box>
      </Box>
    </div>
  );
}
