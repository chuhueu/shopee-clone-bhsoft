import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Checkbox, Container, Typography } from "@material-ui/core";
import ProductCart from "./ProductCart";
import voucherIcon from "../../assets/images/icons/cheap.png";
import shipIcon from "../../assets/images/icons/ship.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { brandState } from "../../redux/reducers/brandReducer";
import { getBrand } from "../../redux/actions/brandAction";
import { addOrderItem, removeOrderItem } from "../../redux/actions/orderAction";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      marginBottom: "10px",
      backgroundColor: "#fff",
    },
    styleTop: {
      padding: "10px 0",
      borderBottom: "1px solid rgba(0,0,0,.09)",
    },
    styleLike: {
      margin: "0 10px",
      padding: "1px 3px",
      borderRadius: "2px",
      backgroundColor: "rgb(238, 77, 45)",
    },
    styleText: {},
    styleVoucher: { padding: "15px 0", borderTop: "1px solid rgba(0,0,0,.09)" },
    styleShip: { padding: "15px 0", borderTop: "1px solid rgba(0,0,0,.09)" },
    styleIcon: { width: "24px", marginRight: "10px" },
    styleLink: {
      textDecoration: "none",
      margin: "0 10px",
      "& h4": {
        color: "#05a",
      },
    },
  })
);

interface Props {
  cartItem: any;
  idOption: number;
  checked: any;
  toggleCheck: any;
  deleteCartItem: any;
  reload?: boolean;
  setReload?: any;
}

const ItemCart = ({
  cartItem,
  idOption,
  checked,
  toggleCheck,
  deleteCartItem,
  reload,
  setReload,
}: Props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const brand = useSelector<RootState, brandState>((state) => state.brand);
  const { brandInfo, isFetching, error } = brand;

  useEffect(() => {
    dispatch(getBrand(cartItem.brand));
  }, [dispatch, cartItem]);

  return (
    <Container className={classes.styleContainer}>
      <Box display="flex" alignItems="center" className={classes.styleTop}>
        <Checkbox
          checked={checked[idOption]}
          onChange={() => toggleCheck(idOption)}
        />
        <Box className={classes.styleLike}>
          <Typography variant="h3">Y??u th??ch</Typography>
        </Box>
        <Box className={classes.styleText}>
          <Typography variant="h4">{brandInfo?.name}</Typography>
        </Box>
      </Box>
      <Box padding="20px 0">
        <ProductCart
          cartItem={cartItem}
          idOption={idOption}
          checked={checked[idOption]}
          toggleCheck={toggleCheck}
          deleteCartItem={deleteCartItem}
          reload={reload}
          setReload={setReload}
        />
      </Box>
      <Box display="flex" alignItems="center" className={classes.styleVoucher}>
        <img src={voucherIcon} alt="" className={classes.styleIcon} />
        <Box className={classes.styleText}>
          <Typography variant="h4">Shop Voucher gi???m ?????n ???50k</Typography>
        </Box>
        <Link to="/" className={classes.styleLink}>
          <Typography variant="h4">Xem th??m voucher</Typography>
        </Link>
      </Box>
      <Box display="flex" alignItems="center" className={classes.styleShip}>
        <img src={shipIcon} alt="" className={classes.styleIcon} />
        <Box className={classes.styleText}>
          <Typography variant="h4">
            Gi???m ???25.000 ph?? v???n chuy???n ????n t???i thi???u ???50.000; Gi???m ???70.000 ph??
            v???n chuy???n ????n t???i thi???u ???300.000
          </Typography>
        </Box>
        <Link to="/" className={classes.styleLink}>
          <Typography variant="h4">T??m hi???u th??m</Typography>
        </Link>
      </Box>
    </Container>
  );
};

export default ItemCart;
