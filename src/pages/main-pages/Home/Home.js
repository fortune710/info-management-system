import { Card, Grid } from "@mui/material";



const HomePage = () => {

    return(
        <main className="dashboard-pages">

            <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        ash
                    </Card>
                </Grid>




            </Grid>

            {/* Second Column */}
            <Grid container>
                <Grid item xs={12} md={3}>

                </Grid>
                <Grid item xs={12} md={9}>

                </Grid>
            </Grid>




        </main>
    )
}

export default HomePage;