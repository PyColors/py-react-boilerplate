import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { RouterProps } from "../../interfaces/router-props.interface";

const useStyles = makeStyles(theme => ({
  top: {
    padding: "100px 0",
    background: "#111",
    color: "white"
  },
  innerTop: {
    color: "white"
  },
  main: {
    background: "#fff",
    color: "#575757",
    lineHeight: "2.25rem",
    fontSize: "1.25rem",
    fontFamily: "Akkurat,sans-serif,Helvetica Neue,Helvetica,Arial",
  },
  headerInnerTitle: {
    fontFamily: "arial",
    marginBottom: "0.35em",
    fontWeight: "bold",
    fontSize: "8rem"
  },
  headerInnerTitlePoint: {
    color: theme.palette.secondary.main
  },
  content: {
    background: "#fff",
    borderTop: "solid 14px #333",
    padding: "0 120px"
  },
  titleContent: {
    margin: "60px 0 20px",
    fontSize: "3.4375rem",
    lineHeight: "3.75rem",
    fontFamily: "Akkurat-bold,sans-serif,Helvetica Neue,Helvetica,Arial",
    color: "#272c32"
  }
}));

interface TermsProps extends RouterProps {}

const Terms = ({ history: { push } }: TermsProps) => {
  const classes = useStyles();

  return (
    <Fragment key="privac-policy">
      <main className={classes.main}>
        <Container maxWidth="xl" component="section" className={classes.top}>
          <Container maxWidth="lg" component="div" className={classes.innerTop}>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                align="center"
                className={classes.headerInnerTitle}
              >
                Terms Of Use
                <span className={classes.headerInnerTitlePoint}>_</span>
              </Typography>
            </Grid>
          </Container>

          <Container maxWidth="lg" component="section">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="h2" component="h3" gutterBottom>
                  
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h5" component="h3" gutterBottom>
                Terms of service
                </Typography>
              </Grid>
            </Grid>
          </Container>

        </Container>

        <Container maxWidth="md" component="section" className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom
              className={classes.titleContent}
              >
                Post haec Gallus
            </Typography>
              <p>
                Hierapolim profecturus ut expeditioni specie
                tenus adesset, Antiochensi plebi suppliciter obsecranti ut
                inediae dispelleret metum, quae per multas difficilisque causas
                adfore iam sperabatur, non ut mos est principibus, quorum
                diffusa potestas localibus subinde medetur aerumnis, disponi
                quicquam statuit vel ex provinciis alimenta transferri
                conterminis, sed <b>consularem</b> Syriae Theophilum prope adstantem
                ultima metuenti multitudini dedit id adsidue replicando quod
                invito rectore nullus egere poterit victu.
              </p>
              <p>
                Nimia in peiores haeserat plagas, ut narrabimus
                postea, aemulis consarcinantibus insidias graves apud
                Constantium, cetera medium principem sed siquid auribus eius
                huius modi quivis infudisset ignotus, <b>acerbum</b> et inplacabilem et
                in hoc causarum titulo dissimilem sui.
              </p>
              <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom
                className={classes.titleContent}
                >
                  Sed cautela
              </Typography>
              <p>
                Enim virtute amabilius, nihil quod magis adliciat ad
                diligendum, quippe cum propter virtutem et probitatem etiam eos,
                quos numquam vidimus, quodam modo diligamus. Quis est qui C.
                Fabrici, M'. Curi non cum caritate aliqua benevola memoriam
                usurpet, quos numquam viderit? quis autem est, qui Tarquinium
                Superbum, qui Sp. Cassium, Sp. Maelium non oderit? Cum duobus
                ducibus de imperio in Italia est <b>decertatum</b>, Pyrrho et
                Hannibale; ab altero propter probitatem eius non nimis alienos
                animos habemus, alterum propter crudelitatem semper haec civitas
                oderit.
              </p>
              <p>
                Advenit post multos Scudilo Scutariorum tribunus velamento
                subagrestis ingenii persuasionis opifex callidus. qui eum
                adulabili sermone seriis <i>admixto</i> solus omnium proficisci
                pellexit vultu adsimulato saepius replicando quod flagrantibus
                votis eum videre frater cuperet patruelis, siquid per
                inprudentiam gestum est remissurus ut mitis et clemens,
                participemque eum suae maiestatis adscisceret, futurum laborum
                quoque socium, quos Arctoae provinciae diu fessae poscebant.
              </p>
              <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom
                className={classes.titleContent}
                >
                  Et licet quocumque oculos
              </Typography>
              <p>
                Flexeris feminas adfatim multas
                spectare cirratas, quibus, si nupsissent, per aetatem ter iam
                nixus poterat suppetere liberorum, ad usque taedium pedibus
                pavimenta tergentes iactari volucriter gyris, dum exprimunt
                innumera simulacra, quae finxere fabulae theatrales.
              </p>
              <p>
                Siquis enim militarium vel honoratorum aut nobilis inter suos
                rumore tenus esset insimulatus fovisse partes hostiles, iniecto
                onere catenarum in modum beluae trahebatur et inimico urgente
                vel nullo, quasi sufficiente hoc solo, quod nominatus esset aut
                delatus aut postulatus, capite vel multatione bonorum aut
                insulari solitudine damnabatur.
              </p>
            </Grid>
          </Grid>
        </Container>
      </main>
    </Fragment>
  );
};

export default Terms;
