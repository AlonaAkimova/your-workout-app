"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FitnessCenterTwoToneIcon from "@mui/icons-material/FitnessCenterTwoTone";
import MonitorWeightTwoToneIcon from "@mui/icons-material/MonitorWeightTwoTone";
import FoodBankTwoToneIcon from "@mui/icons-material/FoodBankTwoTone";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface MyDrawerProps {
  open: boolean;
  onClose: (newOpen: boolean) => void;
}

export default function MyDrawer({ open, onClose }: MyDrawerProps) {
  const toggleDrawer = (newOpen: boolean) => () => {
    onClose(newOpen);
  };
  const router = useRouter();

  const handleItemClick = (path: string) => {
    router.push(path);
    onClose(false);
  };
  const menuItems = [
    { text: "Log Food", icon: <FoodBankTwoToneIcon />, path: "/food" },
    {
      text: "Log Workout",
      icon: <FitnessCenterTwoToneIcon />,
      path: "/workout",
    },
    {
      text: "Weight Dashboard",
      icon: <MonitorWeightTwoToneIcon />,
      path: "/weight",
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((menuItem, index) => (
          <ListItem key={index} disablePadding>
            <Link href={menuItem.path}>
              <ListItemButton onClick={() => handleItemClick(menuItem.path)}>
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
