import CustomLink from "./link";

// TODO: USE INTER EVERYWHERE

const CenterSplash = () => (
    <div
        style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: "0",
            left: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "0",
        }}
    >
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                gap: "0",
            }}
        >
            <h1
                style={{
                    fontSize: "4rem",
                    margin: "0",
                }}
            >
                daniel wei
            </h1>
            <p>
                developer & (occasional) designer <br />
                leading development @{" "}
                <CustomLink href='https://cornelldti.org' text='cornell dti' />
                <br />
                product development @{" "}
                <CustomLink
                    href='https://www.instapathbio.com/'
                    text='instapath'
                />{" "}
                (yc w19) <br />
                majoring in computer science @ cornell <br />
                minoring in ui/ux & east asian studies
                <br />
            </p>
        </div>
    </div>
);

export default CenterSplash;
