import BOOK from '../tables/book';
import AUTHOR from '../tables/author';
import { db } from '../utils';

describe('SELECT', () => {
    it('single column', () => {
        expect(db.from(BOOK).select().toSQL())
            .toEqual('SELECT * FROM "Book"');
        expect(db.from(BOOK).select(BOOK.$all).toSQL())
            .toEqual('SELECT "Book".* FROM "Book"');
        expect(db.from(BOOK).select(BOOK.title).toSQL())
            .toEqual('SELECT "Book"."title" FROM "Book"');
        expect(db.from(BOOK).select(BOOK.title.lower()).toSQL())
            .toEqual('SELECT LOWER("Book"."title") FROM "Book"');
        expect(db.from(BOOK).select(BOOK.$all.count()).toSQL())
            .toEqual('SELECT COUNT("Book".*) FROM "Book"');
        expect(db.from(BOOK).select(BOOK.price.sum()).toSQL())
            .toEqual('SELECT SUM("Book"."price") FROM "Book"');
    });

    it('multiple columns', () => {
        expect(db.from(BOOK).select(BOOK.title.lower(), BOOK.author, BOOK.price).toSQL())
            .toEqual('SELECT LOWER("Book"."title"), "Book"."author", "Book"."price" FROM "Book"');
        expect(db.from(BOOK).select(BOOK.title, BOOK.$all.count(), BOOK.price.sum()).toSQL())
            .toEqual('SELECT "Book"."title", COUNT("Book".*), SUM("Book"."price") FROM "Book"');
    });

    it('multiple tables', () => {
        expect(db.from(BOOK, AUTHOR).select(BOOK.title.lower(), AUTHOR.name, BOOK.price).toSQL())
            .toEqual('SELECT LOWER("Book"."title"), "Author"."name", "Book"."price" FROM "Book", "Author"');
        expect(db.from(BOOK, AUTHOR).select(AUTHOR.name.upper(), BOOK.$all.count(), BOOK.price.sum()).toSQL())
            .toEqual('SELECT UPPER("Author"."name"), COUNT("Book".*), SUM("Book"."price") FROM "Book", "Author"');
        expect(db.from(BOOK, AUTHOR).select(AUTHOR.name.upper(), BOOK.$all).toSQL())
            .toEqual('SELECT UPPER("Author"."name"), "Book".* FROM "Book", "Author"');
    });

    it('"as" keyword', () => {
        expect(db.from(BOOK).select(BOOK.price.sum().as('sum')).toSQL())
            .toEqual('SELECT SUM("Book"."price") AS "sum" FROM "Book"');
        expect(db.from(BOOK).select(BOOK.author, BOOK.price.as('pr')).toSQL())
            .toEqual('SELECT "Book"."author", "Book"."price" AS "pr" FROM "Book"');
    });

    it('"distinct" keyword', () => {
        expect(db.from(BOOK).distinct().select().toSQL())
            .toEqual('SELECT DISTINCT * FROM "Book"');
        expect(db.from(BOOK).distinct().select(BOOK.author).toSQL())
            .toEqual('SELECT DISTINCT "Book"."author" FROM "Book"');
    });
});