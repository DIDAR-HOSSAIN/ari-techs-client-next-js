import { Input } from 'antd';

const Search = () => {
    return (
        <div justify="center" align="middle" style={{ marginTop:"10px" }}>
                <Input.Search type="text" placeholder="Search..."
                    style={
                        {
                            width: "60%",
                        }
                    }
                    onChange={
                        (e) => {
                            // setSearchTerm(e.target.value)
                        }
                    }

                    />
        </div>

    );
};

export default Search;