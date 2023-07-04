import CustomLink from "./link";

// TODO: USE INTER EVERYWHERE

const CenterSplash = () => (
    <div
        style={{
            position: "fixed",
            top: "auto",
            bottom: "auto",
            right: "auto",
            left: "auto",
        }}
    >
        <h1
            style={{
                fontSize: "4rem",
            }}
        >
            daniel wei
        </h1>
        <p>
            developer & (occasional) designer <br />
            leading development @{" "}
            <CustomLink href='https://cornelldti.org' text='cornell dti' />
            <br />
            product engineering @{" "}
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
);

export default CenterSplash;
