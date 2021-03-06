import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  AccountBalanceWalletOutlined,
  BookOutlined,
  InsertChartOutlined,
  KeyboardArrowUp,
  LocalMallOutlined,
  LocalOfferOutlined,
  SettingsOutlined,
  StorefrontOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleSidebar: {
      width: "250px",
      position: "fixed",
      overflowY: "scroll",
      height: "100vh",
      background: "#fff",
      padding: "60px 10px 10px 10px",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    styleBox: { padding: "15px 0" },
    styleIconMenu: {
      fontSize: "20px",
      color: "rgba(0,0,0,0.56)",
      marginRight: "5px",
    },
    styleIconDrop: {
      fontSize: "18px",
      color: "rgba(0,0,0,0.66)",
      padding: 0,
      cursor: "pointer",
      transition: "transform 0.3s ease",
      "&:hover": { color: "#ee2d4d" },
      "&.active": {
        transform: "rotate(180deg)",
        transition: "transform 0.3s ease",
      },
    },
    styleList: {
      padding: "5px 0 0 25px",
      visibility: "hidden",
      height: 0,
      "&.active": {
        visibility: "visible",
        height: "auto",
      },
    },
    styleItem: {
      textDecoration: "none",
      fontSize: "14px",
      color: "rgba(0,0,0,.8)",
      padding: "5px 0",
      transition: "color 0.3s ease",
      "&:hover": {
        color: "#ee2d4d",
        transition: "color 0.3s ease",
      },
    },
  })
);

const Sidebar = () => {
  const classes = useStyles();

  const [toggle1, setToggle1] = useState<boolean>(true);
  const [toggle2, setToggle2] = useState<boolean>(true);
  const [toggle3, setToggle3] = useState<boolean>(true);
  const [toggle4, setToggle4] = useState<boolean>(true);
  const [toggle5, setToggle5] = useState<boolean>(true);
  const [toggle6, setToggle6] = useState<boolean>(true);
  const [toggle7, setToggle7] = useState<boolean>(true);

  return (
    <Box className={classes.styleSidebar}>
      <Box className={classes.styleBox}>
        <Box display="flex" alignItems="center">
          <BookOutlined className={classes.styleIconMenu} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6">Qu???n L?? ????n H??ng</Typography>
            <KeyboardArrowUp
              className={`${classes.styleIconDrop} ${toggle1 ? "active" : ""}`}
              onClick={() => setToggle1(!toggle1)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={`${classes.styleList} ${toggle1 ? "active" : ""}`}
        >
          <Link to="/seller/order" className={classes.styleItem}>
            T???t C???
          </Link>
          <Link to="/" className={classes.styleItem}>
            Tr??? H??ng / Ho??n Ti???n
          </Link>
        </Box>
      </Box>
      <Box className={classes.styleBox}>
        <Box display="flex" alignItems="center">
          <LocalMallOutlined className={classes.styleIconMenu} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6">Qu???n L?? S???n Ph???m</Typography>
            <KeyboardArrowUp
              className={`${classes.styleIconDrop} ${toggle2 ? "active" : ""}`}
              onClick={() => setToggle2(!toggle2)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={`${classes.styleList} ${toggle2 ? "active" : ""}`}
        >
          <Link to="/seller/product" className={classes.styleItem}>
            T???t C??? S???n Ph???m
          </Link>
          <Link to="/" className={classes.styleItem}>
            Th??m S???n Ph???m
          </Link>
        </Box>
      </Box>
      <Box className={classes.styleBox}>
        <Box display="flex" alignItems="center">
          <LocalOfferOutlined className={classes.styleIconMenu} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6">K??nh Marketing</Typography>
            <KeyboardArrowUp
              className={`${classes.styleIconDrop} ${toggle3 ? "active" : ""}`}
              onClick={() => setToggle3(!toggle3)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={`${classes.styleList} ${toggle3 ? "active" : ""}`}
        >
          <Link to="/" className={classes.styleItem}>
            K??nh Marketing
          </Link>
          <Link to="/" className={classes.styleItem}>
            Qu???ng C??o C???a T??i
          </Link>
        </Box>
      </Box>
      <Box className={classes.styleBox}>
        <Box display="flex" alignItems="center">
          <AccountBalanceWalletOutlined className={classes.styleIconMenu} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6">T??i Ch??nh</Typography>
            <KeyboardArrowUp
              className={`${classes.styleIconDrop} ${toggle4 ? "active" : ""}`}
              onClick={() => setToggle4(!toggle4)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={`${classes.styleList} ${toggle4 ? "active" : ""}`}
        >
          <Link to="/" className={classes.styleItem}>
            Doanh Thu
          </Link>
          <Link to="/" className={classes.styleItem}>
            V?? Shopee
          </Link>
          <Link to="/" className={classes.styleItem}>
            T??i Kho???n Ng??n H??ng
          </Link>
        </Box>
      </Box>
      <Box className={classes.styleBox}>
        <Box display="flex" alignItems="center">
          <InsertChartOutlined className={classes.styleIconMenu} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6">D??? Li???u</Typography>
            <KeyboardArrowUp
              className={`${classes.styleIconDrop} ${toggle5 ? "active" : ""}`}
              onClick={() => setToggle5(!toggle5)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={`${classes.styleList} ${toggle5 ? "active" : ""}`}
        >
          <Link to="/" className={classes.styleItem}>
            Ph??n T??ch B??n H??ng
          </Link>
          <Link to="/" className={classes.styleItem}>
            Hi???u Qu??? Ho???t ?????ng
          </Link>
        </Box>
      </Box>
      <Box className={classes.styleBox}>
        <Box display="flex" alignItems="center">
          <StorefrontOutlined className={classes.styleIconMenu} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6">Qu???n L?? Shop</Typography>
            <KeyboardArrowUp
              className={`${classes.styleIconDrop} ${toggle6 ? "active" : ""}`}
              onClick={() => setToggle6(!toggle6)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={`${classes.styleList} ${toggle6 ? "active" : ""}`}
        >
          <Link to="/" className={classes.styleItem}>
            ????nh Gi?? Shop
          </Link>
          <Link to="/" className={classes.styleItem}>
            H??? S?? Shop
          </Link>
          <Link to="/" className={classes.styleItem}>
            Trang Tr?? Shop
          </Link>
          <Link to="/" className={classes.styleItem}>
            Danh M???c C???a Shop
          </Link>
          <Link to="/" className={classes.styleItem}>
            B??o C??o C???a T??i
          </Link>
        </Box>
      </Box>
      <Box className={classes.styleBox}>
        <Box display="flex" alignItems="center">
          <SettingsOutlined className={classes.styleIconMenu} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6">Thi???t L???p Shop</Typography>
            <KeyboardArrowUp
              className={`${classes.styleIconDrop} ${toggle7 ? "active" : ""}`}
              onClick={() => setToggle7(!toggle7)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={`${classes.styleList} ${toggle7 ? "active" : ""}`}
        >
          <Link to="/" className={classes.styleItem}>
            C??i ?????t V???n Chuy???n Shop
          </Link>
          <Link to="/" className={classes.styleItem}>
            ?????a Ch???
          </Link>
          <Link to="/" className={classes.styleItem}>
            Thi???t L???p C?? B???n
          </Link>
          <Link to="/" className={classes.styleItem}>
            T??i Kho???n
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
