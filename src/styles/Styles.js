// styles.js

/*export const styles = {
  cardContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    maxHeight: "75vh",
    overflow: "auto",
    paddingTop: "15px",
    WebkitOverflowScrolling: "touch",
    "::-webkit-scrollbar": {
      display: "none",
    },
  },
};*/

export const styles = {
  container: {
    backgroundColor: "#f0f0f0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //justifyContent: "center",
    //paddingTop: "15vh",
    width: "100%",
    marginTop: "10vh",
    marginBottom: "5vh",
  },

  formContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: "center",
    //paddingTop: "15vh",
    width: "100%",
    gap: "15px",
  },

  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5em",
  },

  outerCardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "5vh",
    paddingBottom: "5vh",
    maxHeight: "55vh",
    width: "100%",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    "::-webkit-scrollbar": {
      display: "none",
    },
  },
};
