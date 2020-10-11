import { Box, Button, ButtonGroup, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.1)
    }
  }
}));

const styles = {
  keyButton: {
    backgroundColor: "#e0e1e6",
    padding: "10px 20px",
    fontSize: "1.2em",
    color: "#888",
    fontWeight: "lighter"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  operatorButton: {
    padding: "10px 20px",
    fontSize: "1.2em",
    backgroundColor: "#fe9241",
    fontWeight: "lighter"
  }
};

const KeyPadComponent = (props) => {
  const classes = useStyles();
  const handleClick = props.handleClick;
  return (
    <div style={styles.container}>
      <Box
        display="flex"
        flexDirection="column"
        className={classes.root}
        alignItems="center"
      >
        <div>
          <Button
            variant="contained"
            color="primary"
            style={styles.operatorButton}
            onClick={(e) => handleClick(e.currentTarget.children[0].textContent)}
          >
            (
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.operatorButton}
            onClick={(e) => handleClick(e.currentTarget.children[0].textContent)}
          >
            CE
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.operatorButton}
            onClick={(e) => handleClick(e.currentTarget.children[0].textContent)}
          >
            )
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.operatorButton}
            onClick={(e) => handleClick(e.currentTarget.children[0].textContent)}
          >
            C
          </Button>
        </div>

        <div>
          <Button
            variant="contained"
            style={styles.keyButton}
            onClick={(e) =>
              handleClick(e.currentTarget.children[0].textContent)
            }
          >
            7
          </Button>
          <Button
            variant="contained"
            style={styles.keyButton}
            onClick={(e) =>
              handleClick(e.currentTarget.children[0].textContent)
            }
          >
            8
          </Button>
          <Button
            variant="contained"
            style={styles.keyButton}
            onClick={(e) =>
              handleClick(e.currentTarget.children[0].textContent)
            }
          >
            9
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.operatorButton}
            onClick={(e) =>
              handleClick(e.currentTarget.children[0].textContent)
            }
          >
            /
          </Button>
        </div>

        <div>
          <Button
            variant="contained"
            style={styles.keyButton}
            onClick={(e) =>
              handleClick(e.currentTarget.children[0].textContent)
            }
          >
            4
          </Button>
          <Button
            variant="contained"
            style={styles.keyButton}
            onClick={(e) =>
              handleClick(e.currentTarget.children[0].textContent)
            }
          >
            5
          </Button>
          <Button
            variant="contained"
            style={styles.keyButton}
            onClick={(e) =>
              handleClick(e.currentTarget.children[0].textContent)
            }
          >
            6
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.operatorButton}
            onClick={(e) =>
              handleClick(e.currentTarget.children[0].textContent)
            }
          >
            *
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            style={styles.keyButton}
            onClick={(e) => handleClick(e.currentTarget.children[0].textContent)}
          >
            1
          </Button>
          <Button
            variant="contained"
            style={styles.keyButton}
            onClick={(e) => handleClick(e.currentTarget.children[0].textContent)}
          >
            2
          </Button>
          <Button
            variant="contained"
            style={styles.keyButton}
            onClick={(e) => handleClick(e.currentTarget.children[0].textContent)}
          >
            3
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.operatorButton}
            onClick={(e) => handleClick(e.currentTarget.children[0].textContent)}
          >
            +
          </Button>
        </div>

        <div>
          <Button
            variant="contained"
            color="primary"
            style={styles.operatorButton}
            onClick={(e) => handleClick(e.currentTarget.children[0].textContent)}
          >
            .
          </Button>
          <Button
            variant="contained"
            style={styles.keyButton}
            onClick={(e) => handleClick(e.currentTarget.children[0].textContent)}
          >
            0
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.operatorButton}
            onClick={(e) => handleClick(e.currentTarget.children[0].textContent)}
          >
            =
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.operatorButton}
            onClick={(e) => handleClick(e.currentTarget.children[0].textContent)}
          >
            -
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default KeyPadComponent;
