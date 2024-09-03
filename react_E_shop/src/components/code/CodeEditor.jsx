import React, { useEffect } from "react";
import AceEditor from "react-ace";
import information from "../../../docs/api_design_docs.txt";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const CodeEditor = () => {
    const [code, setCode] = React.useState("");

    useEffect(() => {
        fetch(information)
            .then((res) => res.text())
            .then((data) => {
                setCode(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <AceEditor
                mode="javascript"
                theme="monokai"
                value={code}
                name="ace-editor"
                editorProps={{ $blockScrolling: true }}
                width="100%"
                height="550px"
                readOnly={true}
            />
        </div>
    );
};

export default CodeEditor;
