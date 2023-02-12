class Pagination {
    page
    per_page
    hostname
    baseUrl

    query = (req) => {
        this.hostname = req.host;
        this.baseUrl = req.baseUrl;

        if (req.query.page) {
            const result = `${req.query.page}`.replace(/[^0-9]/g, "");
            const number = Number(result)
    
            if(number !== NaN && number > 0) this.page = number;
            else this.page = 1;
        } else {
            this.page = 1;
        }
        
        if (req.query.per_page) {
            const result = `${req.query.per_page}`.replace(/[^0-9]/g, "");
            const number = Number(result)
    
            if(number !== NaN) this.per_page = number;
        } else {
            this.per_page = 10;
        }

        

        return this
    }

    data = (total_page) => {
        let next_page = null;
        let previous_page = null;
        let totalPage = Math.floor(total_page / this.per_page);

        if ((total_page % this.per_page) > 0) totalPage += 1;

        // next page
        if (this.page < totalPage) next_page = `${this.hostname}${this.baseUrl}?page=${this.page+1}&per_page=${this.per_page}`

        // previous page
        if (this.page > 1) previous_page = `${this.hostname}${this.baseUrl}?page=${this.page-1}&per_page=${this.per_page}`

        return {
            next_page,
            previous_page,
            current_page: this.page,
            total_page: totalPage,
            per_page: this.per_page,
            total_entries: total_page
        }
    }
}

module.exports = Pagination;