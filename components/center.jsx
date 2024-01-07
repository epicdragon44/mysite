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
                <b>design engineer</b> studying cs & ux @{" "}
                <CustomLink
                    href='https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/POMPG52DZFDJJF5GSUS4USR7T4.jpg'
                    text='cornell'
                />{" "}
                <br />
                <b>currently</b> a founding design eng @ an{" "}
                <CustomLink href='https://www.joinef.com/' text='EF' />
                -backed startup
                <br />
                <b>incoming</b> software eng @{" "}
                <CustomLink href='https://bubble.io/' text='bubble.io' /> <br />
                <b>formerly</b> product engineer @{" "}
                <CustomLink
                    href='https://www.instapathbio.com/'
                    text='instapath'
                />{" "}
                (yc w19) <br />
                <b>on-campus</b>: currently pm @{" "}
                <CustomLink
                    href='https://www.designconsultingcornell.com/'
                    text='dcc'
                />
                , ex-devlead @{" "}
                <CustomLink href='https://cornelldti.org' text='cornell dti' />{" "}
                <br />
                <b>also</b> a <CustomLink href='https://neo.com/' text='neo ' />
                scholar finalist
            </p>
        </div>
    </div>
);

export default CenterSplash;
