import CustomLink from "./link";

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
                design engineer <br />
                studying cs & ux @ cornell <br />
                incoming software eng @{" "}
                <CustomLink href='https://bubble.io/' text='bubble.io' /> <br />
                design consultant @{" "}
                <CustomLink
                    href='https://www.designconsultingcornell.com/'
                    text='dcc'
                />
                <br />
                fmr. development lead @{" "}
                <CustomLink
                    href='https://cornelldti.org'
                    text='cornell dti'
                />{" "}
                <br />
                fmr. product engineer @{" "}
                <CustomLink
                    href='https://www.instapathbio.com/'
                    text='instapath'
                />{" "}
                (yc w19) <br />
            </p>
        </div>
    </div>
);

export default CenterSplash;
