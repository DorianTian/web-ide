// @ts-nocheck
// Generated from SQLiteParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { SQLiteParserListener } from "./SQLiteParserListener";
import { SQLiteParserVisitor } from "./SQLiteParserVisitor";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class SQLiteParser extends antlr.Parser {
    public static readonly SCOL = 1;
    public static readonly DOT = 2;
    public static readonly OPEN_PAR = 3;
    public static readonly CLOSE_PAR = 4;
    public static readonly COMMA = 5;
    public static readonly ASSIGN = 6;
    public static readonly STAR = 7;
    public static readonly PLUS = 8;
    public static readonly MINUS = 9;
    public static readonly TILDE = 10;
    public static readonly PIPE2 = 11;
    public static readonly DIV = 12;
    public static readonly MOD = 13;
    public static readonly LT2 = 14;
    public static readonly GT2 = 15;
    public static readonly AMP = 16;
    public static readonly PIPE = 17;
    public static readonly LT = 18;
    public static readonly LT_EQ = 19;
    public static readonly GT = 20;
    public static readonly GT_EQ = 21;
    public static readonly EQ = 22;
    public static readonly NOT_EQ1 = 23;
    public static readonly NOT_EQ2 = 24;
    public static readonly JPTR = 25;
    public static readonly JPTR2 = 26;
    public static readonly ABORT_ = 27;
    public static readonly ACTION_ = 28;
    public static readonly ADD_ = 29;
    public static readonly AFTER_ = 30;
    public static readonly ALL_ = 31;
    public static readonly ALTER_ = 32;
    public static readonly ALWAYS_ = 33;
    public static readonly ANALYZE_ = 34;
    public static readonly AND_ = 35;
    public static readonly AS_ = 36;
    public static readonly ASC_ = 37;
    public static readonly ATTACH_ = 38;
    public static readonly AUTOINCREMENT_ = 39;
    public static readonly BEFORE_ = 40;
    public static readonly BEGIN_ = 41;
    public static readonly BETWEEN_ = 42;
    public static readonly BY_ = 43;
    public static readonly CASCADE_ = 44;
    public static readonly CASE_ = 45;
    public static readonly CAST_ = 46;
    public static readonly CHECK_ = 47;
    public static readonly COLLATE_ = 48;
    public static readonly COLUMN_ = 49;
    public static readonly COMMIT_ = 50;
    public static readonly CONFLICT_ = 51;
    public static readonly CONSTRAINT_ = 52;
    public static readonly CREATE_ = 53;
    public static readonly CROSS_ = 54;
    public static readonly CURRENT_ = 55;
    public static readonly CURRENT_DATE_ = 56;
    public static readonly CURRENT_TIME_ = 57;
    public static readonly CURRENT_TIMESTAMP_ = 58;
    public static readonly DATABASE_ = 59;
    public static readonly DEFAULT_ = 60;
    public static readonly DEFERRABLE_ = 61;
    public static readonly DEFERRED_ = 62;
    public static readonly DELETE_ = 63;
    public static readonly DESC_ = 64;
    public static readonly DETACH_ = 65;
    public static readonly DISTINCT_ = 66;
    public static readonly DO_ = 67;
    public static readonly DROP_ = 68;
    public static readonly EACH_ = 69;
    public static readonly ELSE_ = 70;
    public static readonly END_ = 71;
    public static readonly ESCAPE_ = 72;
    public static readonly EXCEPT_ = 73;
    public static readonly EXCLUDE_ = 74;
    public static readonly EXCLUSIVE_ = 75;
    public static readonly EXISTS_ = 76;
    public static readonly EXPLAIN_ = 77;
    public static readonly FAIL_ = 78;
    public static readonly FALSE_ = 79;
    public static readonly FILTER_ = 80;
    public static readonly FIRST_ = 81;
    public static readonly FOLLOWING_ = 82;
    public static readonly FOR_ = 83;
    public static readonly FOREIGN_ = 84;
    public static readonly FROM_ = 85;
    public static readonly FULL_ = 86;
    public static readonly GENERATED_ = 87;
    public static readonly GLOB_ = 88;
    public static readonly GROUP_ = 89;
    public static readonly GROUPS_ = 90;
    public static readonly HAVING_ = 91;
    public static readonly IF_ = 92;
    public static readonly IGNORE_ = 93;
    public static readonly IMMEDIATE_ = 94;
    public static readonly IN_ = 95;
    public static readonly INDEX_ = 96;
    public static readonly INDEXED_ = 97;
    public static readonly INITIALLY_ = 98;
    public static readonly INNER_ = 99;
    public static readonly INSERT_ = 100;
    public static readonly INSTEAD_ = 101;
    public static readonly INTERSECT_ = 102;
    public static readonly INTO_ = 103;
    public static readonly IS_ = 104;
    public static readonly ISNULL_ = 105;
    public static readonly JOIN_ = 106;
    public static readonly KEY_ = 107;
    public static readonly LAST_ = 108;
    public static readonly LEFT_ = 109;
    public static readonly LIKE_ = 110;
    public static readonly LIMIT_ = 111;
    public static readonly MATCH_ = 112;
    public static readonly MATERIALIZED_ = 113;
    public static readonly NATURAL_ = 114;
    public static readonly NO_ = 115;
    public static readonly NOT_ = 116;
    public static readonly NOTHING_ = 117;
    public static readonly NOTNULL_ = 118;
    public static readonly NULL_ = 119;
    public static readonly NULLS_ = 120;
    public static readonly OF_ = 121;
    public static readonly OFFSET_ = 122;
    public static readonly ON_ = 123;
    public static readonly OR_ = 124;
    public static readonly ORDER_ = 125;
    public static readonly OTHERS_ = 126;
    public static readonly OUTER_ = 127;
    public static readonly OVER_ = 128;
    public static readonly PARTITION_ = 129;
    public static readonly PLAN_ = 130;
    public static readonly PRAGMA_ = 131;
    public static readonly PRECEDING_ = 132;
    public static readonly PRIMARY_ = 133;
    public static readonly QUERY_ = 134;
    public static readonly RAISE_ = 135;
    public static readonly RANGE_ = 136;
    public static readonly RECURSIVE_ = 137;
    public static readonly REFERENCES_ = 138;
    public static readonly REGEXP_ = 139;
    public static readonly REINDEX_ = 140;
    public static readonly RELEASE_ = 141;
    public static readonly RENAME_ = 142;
    public static readonly REPLACE_ = 143;
    public static readonly RESTRICT_ = 144;
    public static readonly RETURNING_ = 145;
    public static readonly RIGHT_ = 146;
    public static readonly ROLLBACK_ = 147;
    public static readonly ROW_ = 148;
    public static readonly ROWID_ = 149;
    public static readonly ROWS_ = 150;
    public static readonly SAVEPOINT_ = 151;
    public static readonly SELECT_ = 152;
    public static readonly SET_ = 153;
    public static readonly STORED_ = 154;
    public static readonly STRICT_ = 155;
    public static readonly TABLE_ = 156;
    public static readonly TEMP_ = 157;
    public static readonly TEMPORARY_ = 158;
    public static readonly THEN_ = 159;
    public static readonly TIES_ = 160;
    public static readonly TO_ = 161;
    public static readonly TRANSACTION_ = 162;
    public static readonly TRIGGER_ = 163;
    public static readonly TRUE_ = 164;
    public static readonly UNBOUNDED_ = 165;
    public static readonly UNION_ = 166;
    public static readonly UNIQUE_ = 167;
    public static readonly UPDATE_ = 168;
    public static readonly USING_ = 169;
    public static readonly VACUUM_ = 170;
    public static readonly VALUES_ = 171;
    public static readonly VIEW_ = 172;
    public static readonly VIRTUAL_ = 173;
    public static readonly WHEN_ = 174;
    public static readonly WHERE_ = 175;
    public static readonly WINDOW_ = 176;
    public static readonly WITH_ = 177;
    public static readonly WITHIN_ = 178;
    public static readonly WITHOUT_ = 179;
    public static readonly IDENTIFIER = 180;
    public static readonly NUMERIC_LITERAL = 181;
    public static readonly BIND_PARAMETER = 182;
    public static readonly STRING_LITERAL = 183;
    public static readonly BLOB_LITERAL = 184;
    public static readonly SINGLE_LINE_COMMENT = 185;
    public static readonly MULTILINE_COMMENT = 186;
    public static readonly SPACES = 187;
    public static readonly UNEXPECTED_CHAR = 188;
    public static readonly RULE_parse = 0;
    public static readonly RULE_sql_stmt_list = 1;
    public static readonly RULE_sql_stmt = 2;
    public static readonly RULE_alter_table_stmt = 3;
    public static readonly RULE_analyze_stmt = 4;
    public static readonly RULE_attach_stmt = 5;
    public static readonly RULE_begin_stmt = 6;
    public static readonly RULE_commit_stmt = 7;
    public static readonly RULE_rollback_stmt = 8;
    public static readonly RULE_savepoint_stmt = 9;
    public static readonly RULE_release_stmt = 10;
    public static readonly RULE_create_index_stmt = 11;
    public static readonly RULE_indexed_column = 12;
    public static readonly RULE_create_table_stmt = 13;
    public static readonly RULE_table_options = 14;
    public static readonly RULE_column_def = 15;
    public static readonly RULE_type_name = 16;
    public static readonly RULE_column_constraint = 17;
    public static readonly RULE_signed_number = 18;
    public static readonly RULE_table_constraint = 19;
    public static readonly RULE_foreign_key_clause = 20;
    public static readonly RULE_conflict_clause = 21;
    public static readonly RULE_create_trigger_stmt = 22;
    public static readonly RULE_create_view_stmt = 23;
    public static readonly RULE_create_virtual_table_stmt = 24;
    public static readonly RULE_with_clause = 25;
    public static readonly RULE_common_table_expression = 26;
    public static readonly RULE_cte_table_name = 27;
    public static readonly RULE_delete_stmt = 28;
    public static readonly RULE_detach_stmt = 29;
    public static readonly RULE_drop_stmt = 30;
    public static readonly RULE_expr = 31;
    public static readonly RULE_expr_recursive = 32;
    public static readonly RULE_expr_or = 33;
    public static readonly RULE_expr_and = 34;
    public static readonly RULE_expr_not = 35;
    public static readonly RULE_expr_binary = 36;
    public static readonly RULE_expr_comparison = 37;
    public static readonly RULE_expr_bitwise = 38;
    public static readonly RULE_expr_addition = 39;
    public static readonly RULE_expr_multiplication = 40;
    public static readonly RULE_expr_string = 41;
    public static readonly RULE_expr_collate = 42;
    public static readonly RULE_expr_unary = 43;
    public static readonly RULE_expr_base = 44;
    public static readonly RULE_raise_function = 45;
    public static readonly RULE_literal_value = 46;
    public static readonly RULE_percentile_clause = 47;
    public static readonly RULE_value_row = 48;
    public static readonly RULE_values_clause = 49;
    public static readonly RULE_insert_stmt = 50;
    public static readonly RULE_returning_clause = 51;
    public static readonly RULE_upsert_clause = 52;
    public static readonly RULE_pragma_stmt = 53;
    public static readonly RULE_pragma_value = 54;
    public static readonly RULE_reindex_stmt = 55;
    public static readonly RULE_select_stmt = 56;
    public static readonly RULE_join_clause = 57;
    public static readonly RULE_select_core = 58;
    public static readonly RULE_table_or_subquery = 59;
    public static readonly RULE_result_column = 60;
    public static readonly RULE_join_operator = 61;
    public static readonly RULE_join_constraint = 62;
    public static readonly RULE_compound_operator = 63;
    public static readonly RULE_update_stmt = 64;
    public static readonly RULE_column_name_list = 65;
    public static readonly RULE_qualified_table_name = 66;
    public static readonly RULE_vacuum_stmt = 67;
    public static readonly RULE_filter_clause = 68;
    public static readonly RULE_window_defn = 69;
    public static readonly RULE_over_clause = 70;
    public static readonly RULE_frame_spec = 71;
    public static readonly RULE_frame_clause = 72;
    public static readonly RULE_order_clause = 73;
    public static readonly RULE_limit_clause = 74;
    public static readonly RULE_ordering_term = 75;
    public static readonly RULE_asc_desc = 76;
    public static readonly RULE_frame_left = 77;
    public static readonly RULE_frame_right = 78;
    public static readonly RULE_frame_single = 79;
    public static readonly RULE_error_message = 80;
    public static readonly RULE_filename = 81;
    public static readonly RULE_module_argument = 82;
    public static readonly RULE_module_argument_outer = 83;
    public static readonly RULE_module_argument_inner = 84;
    public static readonly RULE_fallback_excluding_conflicts = 85;
    public static readonly RULE_join_keyword = 86;
    public static readonly RULE_fallback = 87;
    public static readonly RULE_name = 88;
    public static readonly RULE_function_name = 89;
    public static readonly RULE_schema_name = 90;
    public static readonly RULE_table_name = 91;
    public static readonly RULE_table_or_index_name = 92;
    public static readonly RULE_column_name = 93;
    public static readonly RULE_column_name_excluding_string = 94;
    public static readonly RULE_column_alias = 95;
    public static readonly RULE_collation_name = 96;
    public static readonly RULE_foreign_table = 97;
    public static readonly RULE_index_name = 98;
    public static readonly RULE_trigger_name = 99;
    public static readonly RULE_view_name = 100;
    public static readonly RULE_module_name = 101;
    public static readonly RULE_pragma_name = 102;
    public static readonly RULE_savepoint_name = 103;
    public static readonly RULE_table_alias = 104;
    public static readonly RULE_table_alias_excluding_joins = 105;
    public static readonly RULE_window_name = 106;
    public static readonly RULE_alias = 107;
    public static readonly RULE_base_window_name = 108;
    public static readonly RULE_table_function_name = 109;
    public static readonly RULE_any_name_excluding_raise = 110;
    public static readonly RULE_any_name_excluding_joins = 111;
    public static readonly RULE_any_name_excluding_string = 112;
    public static readonly RULE_any_name = 113;

    public static readonly literalNames = [
        null, "';'", "'.'", "'('", "')'", "','", "'='", "'*'", "'+'", "'-'", 
        "'~'", "'||'", "'/'", "'%'", "'<<'", "'>>'", "'&'", "'|'", "'<'", 
        "'<='", "'>'", "'>='", "'=='", "'!='", "'<>'", "'->'", "'->>'", 
        "'ABORT'", "'ACTION'", "'ADD'", "'AFTER'", "'ALL'", "'ALTER'", "'ALWAYS'", 
        "'ANALYZE'", "'AND'", "'AS'", "'ASC'", "'ATTACH'", "'AUTOINCREMENT'", 
        "'BEFORE'", "'BEGIN'", "'BETWEEN'", "'BY'", "'CASCADE'", "'CASE'", 
        "'CAST'", "'CHECK'", "'COLLATE'", "'COLUMN'", "'COMMIT'", "'CONFLICT'", 
        "'CONSTRAINT'", "'CREATE'", "'CROSS'", "'CURRENT'", "'CURRENT_DATE'", 
        "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", "'DATABASE'", "'DEFAULT'", 
        "'DEFERRABLE'", "'DEFERRED'", "'DELETE'", "'DESC'", "'DETACH'", 
        "'DISTINCT'", "'DO'", "'DROP'", "'EACH'", "'ELSE'", "'END'", "'ESCAPE'", 
        "'EXCEPT'", "'EXCLUDE'", "'EXCLUSIVE'", "'EXISTS'", "'EXPLAIN'", 
        "'FAIL'", "'FALSE'", "'FILTER'", "'FIRST'", "'FOLLOWING'", "'FOR'", 
        "'FOREIGN'", "'FROM'", "'FULL'", "'GENERATED'", "'GLOB'", "'GROUP'", 
        "'GROUPS'", "'HAVING'", "'IF'", "'IGNORE'", "'IMMEDIATE'", "'IN'", 
        "'INDEX'", "'INDEXED'", "'INITIALLY'", "'INNER'", "'INSERT'", "'INSTEAD'", 
        "'INTERSECT'", "'INTO'", "'IS'", "'ISNULL'", "'JOIN'", "'KEY'", 
        "'LAST'", "'LEFT'", "'LIKE'", "'LIMIT'", "'MATCH'", "'MATERIALIZED'", 
        "'NATURAL'", "'NO'", "'NOT'", "'NOTHING'", "'NOTNULL'", "'NULL'", 
        "'NULLS'", "'OF'", "'OFFSET'", "'ON'", "'OR'", "'ORDER'", "'OTHERS'", 
        "'OUTER'", "'OVER'", "'PARTITION'", "'PLAN'", "'PRAGMA'", "'PRECEDING'", 
        "'PRIMARY'", "'QUERY'", "'RAISE'", "'RANGE'", "'RECURSIVE'", "'REFERENCES'", 
        "'REGEXP'", "'REINDEX'", "'RELEASE'", "'RENAME'", "'REPLACE'", "'RESTRICT'", 
        "'RETURNING'", "'RIGHT'", "'ROLLBACK'", "'ROW'", "'ROWID'", "'ROWS'", 
        "'SAVEPOINT'", "'SELECT'", "'SET'", "'STORED'", "'STRICT'", "'TABLE'", 
        "'TEMP'", "'TEMPORARY'", "'THEN'", "'TIES'", "'TO'", "'TRANSACTION'", 
        "'TRIGGER'", "'TRUE'", "'UNBOUNDED'", "'UNION'", "'UNIQUE'", "'UPDATE'", 
        "'USING'", "'VACUUM'", "'VALUES'", "'VIEW'", "'VIRTUAL'", "'WHEN'", 
        "'WHERE'", "'WINDOW'", "'WITH'", "'WITHIN'", "'WITHOUT'"
    ];

    public static readonly symbolicNames = [
        null, "SCOL", "DOT", "OPEN_PAR", "CLOSE_PAR", "COMMA", "ASSIGN", 
        "STAR", "PLUS", "MINUS", "TILDE", "PIPE2", "DIV", "MOD", "LT2", 
        "GT2", "AMP", "PIPE", "LT", "LT_EQ", "GT", "GT_EQ", "EQ", "NOT_EQ1", 
        "NOT_EQ2", "JPTR", "JPTR2", "ABORT_", "ACTION_", "ADD_", "AFTER_", 
        "ALL_", "ALTER_", "ALWAYS_", "ANALYZE_", "AND_", "AS_", "ASC_", 
        "ATTACH_", "AUTOINCREMENT_", "BEFORE_", "BEGIN_", "BETWEEN_", "BY_", 
        "CASCADE_", "CASE_", "CAST_", "CHECK_", "COLLATE_", "COLUMN_", "COMMIT_", 
        "CONFLICT_", "CONSTRAINT_", "CREATE_", "CROSS_", "CURRENT_", "CURRENT_DATE_", 
        "CURRENT_TIME_", "CURRENT_TIMESTAMP_", "DATABASE_", "DEFAULT_", 
        "DEFERRABLE_", "DEFERRED_", "DELETE_", "DESC_", "DETACH_", "DISTINCT_", 
        "DO_", "DROP_", "EACH_", "ELSE_", "END_", "ESCAPE_", "EXCEPT_", 
        "EXCLUDE_", "EXCLUSIVE_", "EXISTS_", "EXPLAIN_", "FAIL_", "FALSE_", 
        "FILTER_", "FIRST_", "FOLLOWING_", "FOR_", "FOREIGN_", "FROM_", 
        "FULL_", "GENERATED_", "GLOB_", "GROUP_", "GROUPS_", "HAVING_", 
        "IF_", "IGNORE_", "IMMEDIATE_", "IN_", "INDEX_", "INDEXED_", "INITIALLY_", 
        "INNER_", "INSERT_", "INSTEAD_", "INTERSECT_", "INTO_", "IS_", "ISNULL_", 
        "JOIN_", "KEY_", "LAST_", "LEFT_", "LIKE_", "LIMIT_", "MATCH_", 
        "MATERIALIZED_", "NATURAL_", "NO_", "NOT_", "NOTHING_", "NOTNULL_", 
        "NULL_", "NULLS_", "OF_", "OFFSET_", "ON_", "OR_", "ORDER_", "OTHERS_", 
        "OUTER_", "OVER_", "PARTITION_", "PLAN_", "PRAGMA_", "PRECEDING_", 
        "PRIMARY_", "QUERY_", "RAISE_", "RANGE_", "RECURSIVE_", "REFERENCES_", 
        "REGEXP_", "REINDEX_", "RELEASE_", "RENAME_", "REPLACE_", "RESTRICT_", 
        "RETURNING_", "RIGHT_", "ROLLBACK_", "ROW_", "ROWID_", "ROWS_", 
        "SAVEPOINT_", "SELECT_", "SET_", "STORED_", "STRICT_", "TABLE_", 
        "TEMP_", "TEMPORARY_", "THEN_", "TIES_", "TO_", "TRANSACTION_", 
        "TRIGGER_", "TRUE_", "UNBOUNDED_", "UNION_", "UNIQUE_", "UPDATE_", 
        "USING_", "VACUUM_", "VALUES_", "VIEW_", "VIRTUAL_", "WHEN_", "WHERE_", 
        "WINDOW_", "WITH_", "WITHIN_", "WITHOUT_", "IDENTIFIER", "NUMERIC_LITERAL", 
        "BIND_PARAMETER", "STRING_LITERAL", "BLOB_LITERAL", "SINGLE_LINE_COMMENT", 
        "MULTILINE_COMMENT", "SPACES", "UNEXPECTED_CHAR"
    ];
    public static readonly ruleNames = [
        "parse", "sql_stmt_list", "sql_stmt", "alter_table_stmt", "analyze_stmt", 
        "attach_stmt", "begin_stmt", "commit_stmt", "rollback_stmt", "savepoint_stmt", 
        "release_stmt", "create_index_stmt", "indexed_column", "create_table_stmt", 
        "table_options", "column_def", "type_name", "column_constraint", 
        "signed_number", "table_constraint", "foreign_key_clause", "conflict_clause", 
        "create_trigger_stmt", "create_view_stmt", "create_virtual_table_stmt", 
        "with_clause", "common_table_expression", "cte_table_name", "delete_stmt", 
        "detach_stmt", "drop_stmt", "expr", "expr_recursive", "expr_or", 
        "expr_and", "expr_not", "expr_binary", "expr_comparison", "expr_bitwise", 
        "expr_addition", "expr_multiplication", "expr_string", "expr_collate", 
        "expr_unary", "expr_base", "raise_function", "literal_value", "percentile_clause", 
        "value_row", "values_clause", "insert_stmt", "returning_clause", 
        "upsert_clause", "pragma_stmt", "pragma_value", "reindex_stmt", 
        "select_stmt", "join_clause", "select_core", "table_or_subquery", 
        "result_column", "join_operator", "join_constraint", "compound_operator", 
        "update_stmt", "column_name_list", "qualified_table_name", "vacuum_stmt", 
        "filter_clause", "window_defn", "over_clause", "frame_spec", "frame_clause", 
        "order_clause", "limit_clause", "ordering_term", "asc_desc", "frame_left", 
        "frame_right", "frame_single", "error_message", "filename", "module_argument", 
        "module_argument_outer", "module_argument_inner", "fallback_excluding_conflicts", 
        "join_keyword", "fallback", "name", "function_name", "schema_name", 
        "table_name", "table_or_index_name", "column_name", "column_name_excluding_string", 
        "column_alias", "collation_name", "foreign_table", "index_name", 
        "trigger_name", "view_name", "module_name", "pragma_name", "savepoint_name", 
        "table_alias", "table_alias_excluding_joins", "window_name", "alias", 
        "base_window_name", "table_function_name", "any_name_excluding_raise", 
        "any_name_excluding_joins", "any_name_excluding_string", "any_name",
    ];

    public get grammarFileName(): string { return "SQLiteParser.g4"; }
    public get literalNames(): (string | null)[] { return SQLiteParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return SQLiteParser.symbolicNames; }
    public get ruleNames(): string[] { return SQLiteParser.ruleNames; }
    public get serializedATN(): number[] { return SQLiteParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SQLiteParser._ATN, SQLiteParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public parse(): ParseContext {
        let localContext = new ParseContext(this.context, this.state);
        this.enterRule(localContext, 0, SQLiteParser.RULE_parse);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 228;
            this.sql_stmt_list();
            this.state = 229;
            this.match(SQLiteParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sql_stmt_list(): Sql_stmt_listContext {
        let localContext = new Sql_stmt_listContext(this.context, this.state);
        this.enterRule(localContext, 2, SQLiteParser.RULE_sql_stmt_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 232;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2149843525) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 4169) !== 0) || _la === 100 || _la === 131 || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & 3489667211) !== 0) || _la === 177) {
                {
                this.state = 231;
                this.sql_stmt();
                }
            }

            this.state = 240;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 234;
                this.match(SQLiteParser.SCOL);
                this.state = 236;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2149843525) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 4169) !== 0) || _la === 100 || _la === 131 || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & 3489667211) !== 0) || _la === 177) {
                    {
                    this.state = 235;
                    this.sql_stmt();
                    }
                }

                }
                }
                this.state = 242;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sql_stmt(): Sql_stmtContext {
        let localContext = new Sql_stmtContext(this.context, this.state);
        this.enterRule(localContext, 4, SQLiteParser.RULE_sql_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 248;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 77) {
                {
                this.state = 243;
                this.match(SQLiteParser.EXPLAIN_);
                this.state = 246;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 134) {
                    {
                    this.state = 244;
                    this.match(SQLiteParser.QUERY_);
                    this.state = 245;
                    this.match(SQLiteParser.PLAN_);
                    }
                }

                }
            }

            this.state = 272;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                {
                this.state = 250;
                this.alter_table_stmt();
                }
                break;
            case 2:
                {
                this.state = 251;
                this.analyze_stmt();
                }
                break;
            case 3:
                {
                this.state = 252;
                this.attach_stmt();
                }
                break;
            case 4:
                {
                this.state = 253;
                this.begin_stmt();
                }
                break;
            case 5:
                {
                this.state = 254;
                this.commit_stmt();
                }
                break;
            case 6:
                {
                this.state = 255;
                this.create_index_stmt();
                }
                break;
            case 7:
                {
                this.state = 256;
                this.create_table_stmt();
                }
                break;
            case 8:
                {
                this.state = 257;
                this.create_trigger_stmt();
                }
                break;
            case 9:
                {
                this.state = 258;
                this.create_view_stmt();
                }
                break;
            case 10:
                {
                this.state = 259;
                this.create_virtual_table_stmt();
                }
                break;
            case 11:
                {
                this.state = 260;
                this.delete_stmt();
                }
                break;
            case 12:
                {
                this.state = 261;
                this.detach_stmt();
                }
                break;
            case 13:
                {
                this.state = 262;
                this.drop_stmt();
                }
                break;
            case 14:
                {
                this.state = 263;
                this.insert_stmt();
                }
                break;
            case 15:
                {
                this.state = 264;
                this.pragma_stmt();
                }
                break;
            case 16:
                {
                this.state = 265;
                this.reindex_stmt();
                }
                break;
            case 17:
                {
                this.state = 266;
                this.release_stmt();
                }
                break;
            case 18:
                {
                this.state = 267;
                this.rollback_stmt();
                }
                break;
            case 19:
                {
                this.state = 268;
                this.savepoint_stmt();
                }
                break;
            case 20:
                {
                this.state = 269;
                this.select_stmt();
                }
                break;
            case 21:
                {
                this.state = 270;
                this.update_stmt();
                }
                break;
            case 22:
                {
                this.state = 271;
                this.vacuum_stmt();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alter_table_stmt(): Alter_table_stmtContext {
        let localContext = new Alter_table_stmtContext(this.context, this.state);
        this.enterRule(localContext, 6, SQLiteParser.RULE_alter_table_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 274;
            this.match(SQLiteParser.ALTER_);
            this.state = 275;
            this.match(SQLiteParser.TABLE_);
            this.state = 279;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                {
                this.state = 276;
                this.schema_name();
                this.state = 277;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 281;
            this.table_name();
            this.state = 304;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.RENAME_:
                {
                this.state = 282;
                this.match(SQLiteParser.RENAME_);
                this.state = 292;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.TO_:
                    {
                    this.state = 283;
                    this.match(SQLiteParser.TO_);
                    this.state = 284;
                    localContext._new_table_name = this.table_name();
                    }
                    break;
                case SQLiteParser.ABORT_:
                case SQLiteParser.ACTION_:
                case SQLiteParser.AFTER_:
                case SQLiteParser.ALWAYS_:
                case SQLiteParser.ANALYZE_:
                case SQLiteParser.ASC_:
                case SQLiteParser.ATTACH_:
                case SQLiteParser.BEFORE_:
                case SQLiteParser.BEGIN_:
                case SQLiteParser.BY_:
                case SQLiteParser.CASCADE_:
                case SQLiteParser.CAST_:
                case SQLiteParser.COLUMN_:
                case SQLiteParser.CONFLICT_:
                case SQLiteParser.CROSS_:
                case SQLiteParser.CURRENT_:
                case SQLiteParser.CURRENT_DATE_:
                case SQLiteParser.CURRENT_TIME_:
                case SQLiteParser.CURRENT_TIMESTAMP_:
                case SQLiteParser.DATABASE_:
                case SQLiteParser.DEFERRED_:
                case SQLiteParser.DESC_:
                case SQLiteParser.DETACH_:
                case SQLiteParser.DO_:
                case SQLiteParser.EACH_:
                case SQLiteParser.END_:
                case SQLiteParser.EXCEPT_:
                case SQLiteParser.EXCLUDE_:
                case SQLiteParser.EXCLUSIVE_:
                case SQLiteParser.EXPLAIN_:
                case SQLiteParser.FAIL_:
                case SQLiteParser.FALSE_:
                case SQLiteParser.FIRST_:
                case SQLiteParser.FOLLOWING_:
                case SQLiteParser.FOR_:
                case SQLiteParser.FULL_:
                case SQLiteParser.GENERATED_:
                case SQLiteParser.GLOB_:
                case SQLiteParser.GROUPS_:
                case SQLiteParser.IF_:
                case SQLiteParser.IGNORE_:
                case SQLiteParser.IMMEDIATE_:
                case SQLiteParser.INDEXED_:
                case SQLiteParser.INITIALLY_:
                case SQLiteParser.INNER_:
                case SQLiteParser.INSTEAD_:
                case SQLiteParser.INTERSECT_:
                case SQLiteParser.KEY_:
                case SQLiteParser.LAST_:
                case SQLiteParser.LEFT_:
                case SQLiteParser.LIKE_:
                case SQLiteParser.MATCH_:
                case SQLiteParser.MATERIALIZED_:
                case SQLiteParser.NATURAL_:
                case SQLiteParser.NO_:
                case SQLiteParser.NULLS_:
                case SQLiteParser.OF_:
                case SQLiteParser.OFFSET_:
                case SQLiteParser.OTHERS_:
                case SQLiteParser.OUTER_:
                case SQLiteParser.PARTITION_:
                case SQLiteParser.PLAN_:
                case SQLiteParser.PRAGMA_:
                case SQLiteParser.PRECEDING_:
                case SQLiteParser.QUERY_:
                case SQLiteParser.RAISE_:
                case SQLiteParser.RANGE_:
                case SQLiteParser.RECURSIVE_:
                case SQLiteParser.REGEXP_:
                case SQLiteParser.REINDEX_:
                case SQLiteParser.RELEASE_:
                case SQLiteParser.RENAME_:
                case SQLiteParser.REPLACE_:
                case SQLiteParser.RESTRICT_:
                case SQLiteParser.RIGHT_:
                case SQLiteParser.ROLLBACK_:
                case SQLiteParser.ROW_:
                case SQLiteParser.ROWID_:
                case SQLiteParser.ROWS_:
                case SQLiteParser.SAVEPOINT_:
                case SQLiteParser.STORED_:
                case SQLiteParser.STRICT_:
                case SQLiteParser.TEMP_:
                case SQLiteParser.TEMPORARY_:
                case SQLiteParser.TIES_:
                case SQLiteParser.TRIGGER_:
                case SQLiteParser.TRUE_:
                case SQLiteParser.UNBOUNDED_:
                case SQLiteParser.UNION_:
                case SQLiteParser.VACUUM_:
                case SQLiteParser.VIEW_:
                case SQLiteParser.VIRTUAL_:
                case SQLiteParser.WITH_:
                case SQLiteParser.WITHIN_:
                case SQLiteParser.WITHOUT_:
                case SQLiteParser.IDENTIFIER:
                case SQLiteParser.STRING_LITERAL:
                    {
                    this.state = 286;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
                    case 1:
                        {
                        this.state = 285;
                        this.match(SQLiteParser.COLUMN_);
                        }
                        break;
                    }
                    this.state = 288;
                    localContext._old_column_name = this.column_name();
                    this.state = 289;
                    this.match(SQLiteParser.TO_);
                    this.state = 290;
                    localContext._new_column_name = this.column_name();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case SQLiteParser.ADD_:
                {
                this.state = 294;
                this.match(SQLiteParser.ADD_);
                this.state = 296;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
                case 1:
                    {
                    this.state = 295;
                    this.match(SQLiteParser.COLUMN_);
                    }
                    break;
                }
                this.state = 298;
                this.column_def();
                }
                break;
            case SQLiteParser.DROP_:
                {
                this.state = 299;
                this.match(SQLiteParser.DROP_);
                this.state = 301;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
                case 1:
                    {
                    this.state = 300;
                    this.match(SQLiteParser.COLUMN_);
                    }
                    break;
                }
                this.state = 303;
                this.column_name();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public analyze_stmt(): Analyze_stmtContext {
        let localContext = new Analyze_stmtContext(this.context, this.state);
        this.enterRule(localContext, 8, SQLiteParser.RULE_analyze_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 306;
            this.match(SQLiteParser.ANALYZE_);
            this.state = 314;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
            case 1:
                {
                this.state = 307;
                this.schema_name();
                }
                break;
            case 2:
                {
                this.state = 311;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context) ) {
                case 1:
                    {
                    this.state = 308;
                    this.schema_name();
                    this.state = 309;
                    this.match(SQLiteParser.DOT);
                    }
                    break;
                }
                this.state = 313;
                this.table_or_index_name();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public attach_stmt(): Attach_stmtContext {
        let localContext = new Attach_stmtContext(this.context, this.state);
        this.enterRule(localContext, 10, SQLiteParser.RULE_attach_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 316;
            this.match(SQLiteParser.ATTACH_);
            this.state = 318;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 14, this.context) ) {
            case 1:
                {
                this.state = 317;
                this.match(SQLiteParser.DATABASE_);
                }
                break;
            }
            this.state = 320;
            this.expr();
            this.state = 321;
            this.match(SQLiteParser.AS_);
            this.state = 322;
            this.schema_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public begin_stmt(): Begin_stmtContext {
        let localContext = new Begin_stmtContext(this.context, this.state);
        this.enterRule(localContext, 12, SQLiteParser.RULE_begin_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 324;
            this.match(SQLiteParser.BEGIN_);
            this.state = 326;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 62 || _la === 75 || _la === 94) {
                {
                this.state = 325;
                _la = this.tokenStream.LA(1);
                if(!(_la === 62 || _la === 75 || _la === 94)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 329;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 162) {
                {
                this.state = 328;
                this.match(SQLiteParser.TRANSACTION_);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public commit_stmt(): Commit_stmtContext {
        let localContext = new Commit_stmtContext(this.context, this.state);
        this.enterRule(localContext, 14, SQLiteParser.RULE_commit_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 331;
            _la = this.tokenStream.LA(1);
            if(!(_la === 50 || _la === 71)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 333;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 162) {
                {
                this.state = 332;
                this.match(SQLiteParser.TRANSACTION_);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rollback_stmt(): Rollback_stmtContext {
        let localContext = new Rollback_stmtContext(this.context, this.state);
        this.enterRule(localContext, 16, SQLiteParser.RULE_rollback_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 335;
            this.match(SQLiteParser.ROLLBACK_);
            this.state = 337;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 162) {
                {
                this.state = 336;
                this.match(SQLiteParser.TRANSACTION_);
                }
            }

            this.state = 344;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 161) {
                {
                this.state = 339;
                this.match(SQLiteParser.TO_);
                this.state = 341;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
                case 1:
                    {
                    this.state = 340;
                    this.match(SQLiteParser.SAVEPOINT_);
                    }
                    break;
                }
                this.state = 343;
                this.savepoint_name();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public savepoint_stmt(): Savepoint_stmtContext {
        let localContext = new Savepoint_stmtContext(this.context, this.state);
        this.enterRule(localContext, 18, SQLiteParser.RULE_savepoint_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 346;
            this.match(SQLiteParser.SAVEPOINT_);
            this.state = 347;
            this.savepoint_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public release_stmt(): Release_stmtContext {
        let localContext = new Release_stmtContext(this.context, this.state);
        this.enterRule(localContext, 20, SQLiteParser.RULE_release_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 349;
            this.match(SQLiteParser.RELEASE_);
            this.state = 351;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
            case 1:
                {
                this.state = 350;
                this.match(SQLiteParser.SAVEPOINT_);
                }
                break;
            }
            this.state = 353;
            this.savepoint_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public create_index_stmt(): Create_index_stmtContext {
        let localContext = new Create_index_stmtContext(this.context, this.state);
        this.enterRule(localContext, 22, SQLiteParser.RULE_create_index_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 355;
            this.match(SQLiteParser.CREATE_);
            this.state = 357;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 356;
                this.match(SQLiteParser.UNIQUE_);
                }
            }

            this.state = 359;
            this.match(SQLiteParser.INDEX_);
            this.state = 363;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
            case 1:
                {
                this.state = 360;
                this.match(SQLiteParser.IF_);
                this.state = 361;
                this.match(SQLiteParser.NOT_);
                this.state = 362;
                this.match(SQLiteParser.EXISTS_);
                }
                break;
            }
            this.state = 368;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
            case 1:
                {
                this.state = 365;
                this.schema_name();
                this.state = 366;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 370;
            this.index_name();
            this.state = 371;
            this.match(SQLiteParser.ON_);
            this.state = 372;
            this.table_name();
            this.state = 373;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 374;
            this.indexed_column();
            this.state = 379;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 375;
                this.match(SQLiteParser.COMMA);
                this.state = 376;
                this.indexed_column();
                }
                }
                this.state = 381;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 382;
            this.match(SQLiteParser.CLOSE_PAR);
            this.state = 385;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 175) {
                {
                this.state = 383;
                this.match(SQLiteParser.WHERE_);
                this.state = 384;
                this.expr();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public indexed_column(): Indexed_columnContext {
        let localContext = new Indexed_columnContext(this.context, this.state);
        this.enterRule(localContext, 24, SQLiteParser.RULE_indexed_column);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 387;
            this.expr();
            this.state = 390;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 388;
                this.match(SQLiteParser.COLLATE_);
                this.state = 389;
                this.collation_name();
                }
            }

            this.state = 393;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37 || _la === 64) {
                {
                this.state = 392;
                this.asc_desc();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public create_table_stmt(): Create_table_stmtContext {
        let localContext = new Create_table_stmtContext(this.context, this.state);
        this.enterRule(localContext, 26, SQLiteParser.RULE_create_table_stmt);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 395;
            this.match(SQLiteParser.CREATE_);
            this.state = 397;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 157 || _la === 158) {
                {
                this.state = 396;
                _la = this.tokenStream.LA(1);
                if(!(_la === 157 || _la === 158)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 399;
            this.match(SQLiteParser.TABLE_);
            this.state = 403;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
            case 1:
                {
                this.state = 400;
                this.match(SQLiteParser.IF_);
                this.state = 401;
                this.match(SQLiteParser.NOT_);
                this.state = 402;
                this.match(SQLiteParser.EXISTS_);
                }
                break;
            }
            this.state = 408;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                {
                this.state = 405;
                this.schema_name();
                this.state = 406;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 410;
            this.table_name();
            this.state = 433;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.OPEN_PAR:
                {
                this.state = 411;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 412;
                this.column_def();
                this.state = 417;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 413;
                        this.match(SQLiteParser.COMMA);
                        this.state = 414;
                        this.column_def();
                        }
                        }
                    }
                    this.state = 419;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
                }
                this.state = 424;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 420;
                    this.match(SQLiteParser.COMMA);
                    this.state = 421;
                    this.table_constraint();
                    }
                    }
                    this.state = 426;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 427;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 429;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 155 || _la === 179) {
                    {
                    this.state = 428;
                    this.table_options();
                    }
                }

                }
                break;
            case SQLiteParser.AS_:
                {
                this.state = 431;
                this.match(SQLiteParser.AS_);
                this.state = 432;
                this.select_stmt();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public table_options(): Table_optionsContext {
        let localContext = new Table_optionsContext(this.context, this.state);
        this.enterRule(localContext, 28, SQLiteParser.RULE_table_options);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 438;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.WITHOUT_:
                {
                this.state = 435;
                this.match(SQLiteParser.WITHOUT_);
                this.state = 436;
                this.match(SQLiteParser.ROWID_);
                }
                break;
            case SQLiteParser.STRICT_:
                {
                this.state = 437;
                this.match(SQLiteParser.STRICT_);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 448;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 440;
                this.match(SQLiteParser.COMMA);
                this.state = 444;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.WITHOUT_:
                    {
                    this.state = 441;
                    this.match(SQLiteParser.WITHOUT_);
                    this.state = 442;
                    this.match(SQLiteParser.ROWID_);
                    }
                    break;
                case SQLiteParser.STRICT_:
                    {
                    this.state = 443;
                    this.match(SQLiteParser.STRICT_);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                }
                this.state = 450;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public column_def(): Column_defContext {
        let localContext = new Column_defContext(this.context, this.state);
        this.enterRule(localContext, 30, SQLiteParser.RULE_column_def);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 451;
            this.column_name();
            this.state = 453;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
            case 1:
                {
                this.state = 452;
                this.type_name();
                }
                break;
            }
            this.state = 458;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 16848897) !== 0) || _la === 87 || _la === 116 || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 540673) !== 0) || _la === 167) {
                {
                {
                this.state = 455;
                this.column_constraint();
                }
                }
                this.state = 460;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public type_name(): Type_nameContext {
        let localContext = new Type_nameContext(this.context, this.state);
        this.enterRule(localContext, 32, SQLiteParser.RULE_type_name);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 462;
            this.errorHandler.sync(this);
            alternative = 1 + 1;
            do {
                switch (alternative) {
                case 1 + 1:
                    {
                    {
                    this.state = 461;
                    this.name();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 464;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 41, this.context);
            } while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 476;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context) ) {
            case 1:
                {
                this.state = 466;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 467;
                this.signed_number();
                this.state = 468;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case 2:
                {
                this.state = 470;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 471;
                this.signed_number();
                this.state = 472;
                this.match(SQLiteParser.COMMA);
                this.state = 473;
                this.signed_number();
                this.state = 474;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public column_constraint(): Column_constraintContext {
        let localContext = new Column_constraintContext(this.context, this.state);
        this.enterRule(localContext, 34, SQLiteParser.RULE_column_constraint);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 480;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 478;
                this.match(SQLiteParser.CONSTRAINT_);
                this.state = 479;
                this.name();
                }
            }

            this.state = 531;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.PRIMARY_:
                {
                this.state = 482;
                this.match(SQLiteParser.PRIMARY_);
                this.state = 483;
                this.match(SQLiteParser.KEY_);
                this.state = 485;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 37 || _la === 64) {
                    {
                    this.state = 484;
                    this.asc_desc();
                    }
                }

                this.state = 488;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 123) {
                    {
                    this.state = 487;
                    this.conflict_clause();
                    }
                }

                this.state = 491;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 39) {
                    {
                    this.state = 490;
                    this.match(SQLiteParser.AUTOINCREMENT_);
                    }
                }

                }
                break;
            case SQLiteParser.NOT_:
            case SQLiteParser.NULL_:
            case SQLiteParser.UNIQUE_:
                {
                this.state = 498;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.NOT_:
                case SQLiteParser.NULL_:
                    {
                    this.state = 494;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 116) {
                        {
                        this.state = 493;
                        this.match(SQLiteParser.NOT_);
                        }
                    }

                    this.state = 496;
                    this.match(SQLiteParser.NULL_);
                    }
                    break;
                case SQLiteParser.UNIQUE_:
                    {
                    this.state = 497;
                    this.match(SQLiteParser.UNIQUE_);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 501;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 123) {
                    {
                    this.state = 500;
                    this.conflict_clause();
                    }
                }

                }
                break;
            case SQLiteParser.CHECK_:
                {
                this.state = 503;
                this.match(SQLiteParser.CHECK_);
                this.state = 504;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 505;
                this.expr();
                this.state = 506;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case SQLiteParser.DEFAULT_:
                {
                this.state = 508;
                this.match(SQLiteParser.DEFAULT_);
                this.state = 515;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
                case 1:
                    {
                    this.state = 509;
                    this.signed_number();
                    }
                    break;
                case 2:
                    {
                    this.state = 510;
                    this.literal_value();
                    }
                    break;
                case 3:
                    {
                    this.state = 511;
                    this.match(SQLiteParser.OPEN_PAR);
                    this.state = 512;
                    this.expr();
                    this.state = 513;
                    this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                }
                }
                break;
            case SQLiteParser.COLLATE_:
                {
                this.state = 517;
                this.match(SQLiteParser.COLLATE_);
                this.state = 518;
                this.collation_name();
                }
                break;
            case SQLiteParser.REFERENCES_:
                {
                this.state = 519;
                this.foreign_key_clause();
                }
                break;
            case SQLiteParser.AS_:
            case SQLiteParser.GENERATED_:
                {
                this.state = 522;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 87) {
                    {
                    this.state = 520;
                    this.match(SQLiteParser.GENERATED_);
                    this.state = 521;
                    this.match(SQLiteParser.ALWAYS_);
                    }
                }

                this.state = 524;
                this.match(SQLiteParser.AS_);
                this.state = 525;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 526;
                this.expr();
                this.state = 527;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 529;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 154 || _la === 173) {
                    {
                    this.state = 528;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 154 || _la === 173)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public signed_number(): Signed_numberContext {
        let localContext = new Signed_numberContext(this.context, this.state);
        this.enterRule(localContext, 36, SQLiteParser.RULE_signed_number);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 534;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 8 || _la === 9) {
                {
                this.state = 533;
                _la = this.tokenStream.LA(1);
                if(!(_la === 8 || _la === 9)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 536;
            this.match(SQLiteParser.NUMERIC_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public table_constraint(): Table_constraintContext {
        let localContext = new Table_constraintContext(this.context, this.state);
        this.enterRule(localContext, 38, SQLiteParser.RULE_table_constraint);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 540;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 538;
                this.match(SQLiteParser.CONSTRAINT_);
                this.state = 539;
                this.name();
                }
            }

            this.state = 579;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.PRIMARY_:
            case SQLiteParser.UNIQUE_:
                {
                this.state = 545;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.PRIMARY_:
                    {
                    this.state = 542;
                    this.match(SQLiteParser.PRIMARY_);
                    this.state = 543;
                    this.match(SQLiteParser.KEY_);
                    }
                    break;
                case SQLiteParser.UNIQUE_:
                    {
                    this.state = 544;
                    this.match(SQLiteParser.UNIQUE_);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 547;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 548;
                this.indexed_column();
                this.state = 553;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 549;
                    this.match(SQLiteParser.COMMA);
                    this.state = 550;
                    this.indexed_column();
                    }
                    }
                    this.state = 555;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 556;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 558;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 123) {
                    {
                    this.state = 557;
                    this.conflict_clause();
                    }
                }

                }
                break;
            case SQLiteParser.CHECK_:
                {
                this.state = 560;
                this.match(SQLiteParser.CHECK_);
                this.state = 561;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 562;
                this.expr();
                this.state = 563;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case SQLiteParser.FOREIGN_:
                {
                this.state = 565;
                this.match(SQLiteParser.FOREIGN_);
                this.state = 566;
                this.match(SQLiteParser.KEY_);
                this.state = 567;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 568;
                this.column_name();
                this.state = 573;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 569;
                    this.match(SQLiteParser.COMMA);
                    this.state = 570;
                    this.column_name();
                    }
                    }
                    this.state = 575;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 576;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 577;
                this.foreign_key_clause();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public foreign_key_clause(): Foreign_key_clauseContext {
        let localContext = new Foreign_key_clauseContext(this.context, this.state);
        this.enterRule(localContext, 40, SQLiteParser.RULE_foreign_key_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 581;
            this.match(SQLiteParser.REFERENCES_);
            this.state = 582;
            this.foreign_table();
            this.state = 594;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 583;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 584;
                this.column_name();
                this.state = 589;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 585;
                    this.match(SQLiteParser.COMMA);
                    this.state = 586;
                    this.column_name();
                    }
                    }
                    this.state = 591;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 592;
                this.match(SQLiteParser.CLOSE_PAR);
                }
            }

            this.state = 610;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 112 || _la === 123) {
                {
                this.state = 608;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.ON_:
                    {
                    this.state = 596;
                    this.match(SQLiteParser.ON_);
                    this.state = 597;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 63 || _la === 168)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 604;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.SET_:
                        {
                        this.state = 598;
                        this.match(SQLiteParser.SET_);
                        this.state = 599;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 60 || _la === 119)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                        break;
                    case SQLiteParser.CASCADE_:
                        {
                        this.state = 600;
                        this.match(SQLiteParser.CASCADE_);
                        }
                        break;
                    case SQLiteParser.RESTRICT_:
                        {
                        this.state = 601;
                        this.match(SQLiteParser.RESTRICT_);
                        }
                        break;
                    case SQLiteParser.NO_:
                        {
                        this.state = 602;
                        this.match(SQLiteParser.NO_);
                        this.state = 603;
                        this.match(SQLiteParser.ACTION_);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    break;
                case SQLiteParser.MATCH_:
                    {
                    this.state = 606;
                    this.match(SQLiteParser.MATCH_);
                    this.state = 607;
                    this.name();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 612;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 621;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 68, this.context) ) {
            case 1:
                {
                this.state = 614;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 613;
                    this.match(SQLiteParser.NOT_);
                    }
                }

                this.state = 616;
                this.match(SQLiteParser.DEFERRABLE_);
                this.state = 619;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 98) {
                    {
                    this.state = 617;
                    this.match(SQLiteParser.INITIALLY_);
                    this.state = 618;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 62 || _la === 94)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public conflict_clause(): Conflict_clauseContext {
        let localContext = new Conflict_clauseContext(this.context, this.state);
        this.enterRule(localContext, 42, SQLiteParser.RULE_conflict_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 623;
            this.match(SQLiteParser.ON_);
            this.state = 624;
            this.match(SQLiteParser.CONFLICT_);
            this.state = 625;
            _la = this.tokenStream.LA(1);
            if(!(_la === 27 || _la === 78 || _la === 93 || _la === 143 || _la === 147)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public create_trigger_stmt(): Create_trigger_stmtContext {
        let localContext = new Create_trigger_stmtContext(this.context, this.state);
        this.enterRule(localContext, 44, SQLiteParser.RULE_create_trigger_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 627;
            this.match(SQLiteParser.CREATE_);
            this.state = 629;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 157 || _la === 158) {
                {
                this.state = 628;
                _la = this.tokenStream.LA(1);
                if(!(_la === 157 || _la === 158)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 631;
            this.match(SQLiteParser.TRIGGER_);
            this.state = 635;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context) ) {
            case 1:
                {
                this.state = 632;
                this.match(SQLiteParser.IF_);
                this.state = 633;
                this.match(SQLiteParser.NOT_);
                this.state = 634;
                this.match(SQLiteParser.EXISTS_);
                }
                break;
            }
            this.state = 640;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
            case 1:
                {
                this.state = 637;
                this.schema_name();
                this.state = 638;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 642;
            this.trigger_name();
            this.state = 647;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.BEFORE_:
                {
                this.state = 643;
                this.match(SQLiteParser.BEFORE_);
                }
                break;
            case SQLiteParser.AFTER_:
                {
                this.state = 644;
                this.match(SQLiteParser.AFTER_);
                }
                break;
            case SQLiteParser.INSTEAD_:
                {
                this.state = 645;
                this.match(SQLiteParser.INSTEAD_);
                this.state = 646;
                this.match(SQLiteParser.OF_);
                }
                break;
            case SQLiteParser.DELETE_:
            case SQLiteParser.INSERT_:
            case SQLiteParser.UPDATE_:
                break;
            default:
                break;
            }
            this.state = 663;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.DELETE_:
                {
                this.state = 649;
                this.match(SQLiteParser.DELETE_);
                }
                break;
            case SQLiteParser.INSERT_:
                {
                this.state = 650;
                this.match(SQLiteParser.INSERT_);
                }
                break;
            case SQLiteParser.UPDATE_:
                {
                this.state = 651;
                this.match(SQLiteParser.UPDATE_);
                this.state = 661;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 121) {
                    {
                    this.state = 652;
                    this.match(SQLiteParser.OF_);
                    this.state = 653;
                    this.column_name();
                    this.state = 658;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 5) {
                        {
                        {
                        this.state = 654;
                        this.match(SQLiteParser.COMMA);
                        this.state = 655;
                        this.column_name();
                        }
                        }
                        this.state = 660;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 665;
            this.match(SQLiteParser.ON_);
            this.state = 666;
            this.table_name();
            this.state = 670;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 83) {
                {
                this.state = 667;
                this.match(SQLiteParser.FOR_);
                this.state = 668;
                this.match(SQLiteParser.EACH_);
                this.state = 669;
                this.match(SQLiteParser.ROW_);
                }
            }

            this.state = 674;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 174) {
                {
                this.state = 672;
                this.match(SQLiteParser.WHEN_);
                this.state = 673;
                this.expr();
                }
            }

            this.state = 676;
            this.match(SQLiteParser.BEGIN_);
            this.state = 685;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 681;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
                case 1:
                    {
                    this.state = 677;
                    this.update_stmt();
                    }
                    break;
                case 2:
                    {
                    this.state = 678;
                    this.insert_stmt();
                    }
                    break;
                case 3:
                    {
                    this.state = 679;
                    this.delete_stmt();
                    }
                    break;
                case 4:
                    {
                    this.state = 680;
                    this.select_stmt();
                    }
                    break;
                }
                this.state = 683;
                this.match(SQLiteParser.SCOL);
                }
                }
                this.state = 687;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 63 || _la === 100 || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 301990401) !== 0) || _la === 177);
            this.state = 689;
            this.match(SQLiteParser.END_);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public create_view_stmt(): Create_view_stmtContext {
        let localContext = new Create_view_stmtContext(this.context, this.state);
        this.enterRule(localContext, 46, SQLiteParser.RULE_create_view_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 691;
            this.match(SQLiteParser.CREATE_);
            this.state = 693;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 157 || _la === 158) {
                {
                this.state = 692;
                _la = this.tokenStream.LA(1);
                if(!(_la === 157 || _la === 158)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 695;
            this.match(SQLiteParser.VIEW_);
            this.state = 699;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context) ) {
            case 1:
                {
                this.state = 696;
                this.match(SQLiteParser.IF_);
                this.state = 697;
                this.match(SQLiteParser.NOT_);
                this.state = 698;
                this.match(SQLiteParser.EXISTS_);
                }
                break;
            }
            this.state = 704;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                {
                this.state = 701;
                this.schema_name();
                this.state = 702;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 706;
            this.view_name();
            this.state = 718;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 707;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 708;
                this.column_name();
                this.state = 713;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 709;
                    this.match(SQLiteParser.COMMA);
                    this.state = 710;
                    this.column_name();
                    }
                    }
                    this.state = 715;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 716;
                this.match(SQLiteParser.CLOSE_PAR);
                }
            }

            this.state = 720;
            this.match(SQLiteParser.AS_);
            this.state = 721;
            this.select_stmt();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public create_virtual_table_stmt(): Create_virtual_table_stmtContext {
        let localContext = new Create_virtual_table_stmtContext(this.context, this.state);
        this.enterRule(localContext, 48, SQLiteParser.RULE_create_virtual_table_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 723;
            this.match(SQLiteParser.CREATE_);
            this.state = 724;
            this.match(SQLiteParser.VIRTUAL_);
            this.state = 725;
            this.match(SQLiteParser.TABLE_);
            this.state = 729;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 85, this.context) ) {
            case 1:
                {
                this.state = 726;
                this.match(SQLiteParser.IF_);
                this.state = 727;
                this.match(SQLiteParser.NOT_);
                this.state = 728;
                this.match(SQLiteParser.EXISTS_);
                }
                break;
            }
            this.state = 734;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 86, this.context) ) {
            case 1:
                {
                this.state = 731;
                this.schema_name();
                this.state = 732;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 736;
            this.table_name();
            this.state = 737;
            this.match(SQLiteParser.USING_);
            this.state = 738;
            this.module_name();
            this.state = 750;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 739;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 740;
                this.module_argument();
                this.state = 745;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 741;
                    this.match(SQLiteParser.COMMA);
                    this.state = 742;
                    this.module_argument();
                    }
                    }
                    this.state = 747;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 748;
                this.match(SQLiteParser.CLOSE_PAR);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public with_clause(): With_clauseContext {
        let localContext = new With_clauseContext(this.context, this.state);
        this.enterRule(localContext, 50, SQLiteParser.RULE_with_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 752;
            this.match(SQLiteParser.WITH_);
            this.state = 754;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 89, this.context) ) {
            case 1:
                {
                this.state = 753;
                this.match(SQLiteParser.RECURSIVE_);
                }
                break;
            }
            this.state = 756;
            this.common_table_expression();
            this.state = 761;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 757;
                this.match(SQLiteParser.COMMA);
                this.state = 758;
                this.common_table_expression();
                }
                }
                this.state = 763;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public common_table_expression(): Common_table_expressionContext {
        let localContext = new Common_table_expressionContext(this.context, this.state);
        this.enterRule(localContext, 52, SQLiteParser.RULE_common_table_expression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 764;
            this.cte_table_name();
            this.state = 765;
            this.match(SQLiteParser.AS_);
            this.state = 770;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 113 || _la === 116) {
                {
                this.state = 767;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                    this.state = 766;
                    this.match(SQLiteParser.NOT_);
                    }
                }

                this.state = 769;
                this.match(SQLiteParser.MATERIALIZED_);
                }
            }

            this.state = 772;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 773;
            this.select_stmt();
            this.state = 774;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cte_table_name(): Cte_table_nameContext {
        let localContext = new Cte_table_nameContext(this.context, this.state);
        this.enterRule(localContext, 54, SQLiteParser.RULE_cte_table_name);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 776;
            this.table_name();
            this.state = 788;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 777;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 778;
                this.column_name();
                this.state = 783;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 779;
                    this.match(SQLiteParser.COMMA);
                    this.state = 780;
                    this.column_name();
                    }
                    }
                    this.state = 785;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 786;
                this.match(SQLiteParser.CLOSE_PAR);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public delete_stmt(): Delete_stmtContext {
        let localContext = new Delete_stmtContext(this.context, this.state);
        this.enterRule(localContext, 56, SQLiteParser.RULE_delete_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 791;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 177) {
                {
                this.state = 790;
                this.with_clause();
                }
            }

            this.state = 793;
            this.match(SQLiteParser.DELETE_);
            this.state = 794;
            this.match(SQLiteParser.FROM_);
            this.state = 795;
            this.qualified_table_name();
            this.state = 798;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 175) {
                {
                this.state = 796;
                this.match(SQLiteParser.WHERE_);
                this.state = 797;
                this.expr();
                }
            }

            this.state = 801;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 800;
                this.returning_clause();
                }
            }

            this.state = 804;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 125) {
                {
                this.state = 803;
                this.order_clause();
                }
            }

            this.state = 807;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 111) {
                {
                this.state = 806;
                this.limit_clause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public detach_stmt(): Detach_stmtContext {
        let localContext = new Detach_stmtContext(this.context, this.state);
        this.enterRule(localContext, 58, SQLiteParser.RULE_detach_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 809;
            this.match(SQLiteParser.DETACH_);
            this.state = 811;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 100, this.context) ) {
            case 1:
                {
                this.state = 810;
                this.match(SQLiteParser.DATABASE_);
                }
                break;
            }
            this.state = 813;
            this.schema_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public drop_stmt(): Drop_stmtContext {
        let localContext = new Drop_stmtContext(this.context, this.state);
        this.enterRule(localContext, 60, SQLiteParser.RULE_drop_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 815;
            this.match(SQLiteParser.DROP_);
            this.state = 816;
            localContext._object = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 96 || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & 65665) !== 0))) {
                localContext._object = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 819;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context) ) {
            case 1:
                {
                this.state = 817;
                this.match(SQLiteParser.IF_);
                this.state = 818;
                this.match(SQLiteParser.EXISTS_);
                }
                break;
            }
            this.state = 824;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context) ) {
            case 1:
                {
                this.state = 821;
                this.schema_name();
                this.state = 822;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 826;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr(): ExprContext {
        let localContext = new ExprContext(this.context, this.state);
        this.enterRule(localContext, 62, SQLiteParser.RULE_expr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 828;
            this.expr_recursive();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_recursive(): Expr_recursiveContext {
        let localContext = new Expr_recursiveContext(this.context, this.state);
        this.enterRule(localContext, 64, SQLiteParser.RULE_expr_recursive);
        let _la: number;
        try {
            this.state = 897;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 114, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 830;
                this.function_name();
                this.state = 831;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 847;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.OPEN_PAR:
                case SQLiteParser.PLUS:
                case SQLiteParser.MINUS:
                case SQLiteParser.TILDE:
                case SQLiteParser.ABORT_:
                case SQLiteParser.ACTION_:
                case SQLiteParser.AFTER_:
                case SQLiteParser.ALWAYS_:
                case SQLiteParser.ANALYZE_:
                case SQLiteParser.ASC_:
                case SQLiteParser.ATTACH_:
                case SQLiteParser.BEFORE_:
                case SQLiteParser.BEGIN_:
                case SQLiteParser.BY_:
                case SQLiteParser.CASCADE_:
                case SQLiteParser.CASE_:
                case SQLiteParser.CAST_:
                case SQLiteParser.COLUMN_:
                case SQLiteParser.CONFLICT_:
                case SQLiteParser.CROSS_:
                case SQLiteParser.CURRENT_:
                case SQLiteParser.CURRENT_DATE_:
                case SQLiteParser.CURRENT_TIME_:
                case SQLiteParser.CURRENT_TIMESTAMP_:
                case SQLiteParser.DATABASE_:
                case SQLiteParser.DEFERRED_:
                case SQLiteParser.DESC_:
                case SQLiteParser.DETACH_:
                case SQLiteParser.DISTINCT_:
                case SQLiteParser.DO_:
                case SQLiteParser.EACH_:
                case SQLiteParser.END_:
                case SQLiteParser.EXCEPT_:
                case SQLiteParser.EXCLUDE_:
                case SQLiteParser.EXCLUSIVE_:
                case SQLiteParser.EXISTS_:
                case SQLiteParser.EXPLAIN_:
                case SQLiteParser.FAIL_:
                case SQLiteParser.FALSE_:
                case SQLiteParser.FIRST_:
                case SQLiteParser.FOLLOWING_:
                case SQLiteParser.FOR_:
                case SQLiteParser.FULL_:
                case SQLiteParser.GENERATED_:
                case SQLiteParser.GLOB_:
                case SQLiteParser.GROUPS_:
                case SQLiteParser.IF_:
                case SQLiteParser.IGNORE_:
                case SQLiteParser.IMMEDIATE_:
                case SQLiteParser.INDEXED_:
                case SQLiteParser.INITIALLY_:
                case SQLiteParser.INNER_:
                case SQLiteParser.INSTEAD_:
                case SQLiteParser.INTERSECT_:
                case SQLiteParser.KEY_:
                case SQLiteParser.LAST_:
                case SQLiteParser.LEFT_:
                case SQLiteParser.LIKE_:
                case SQLiteParser.MATCH_:
                case SQLiteParser.MATERIALIZED_:
                case SQLiteParser.NATURAL_:
                case SQLiteParser.NO_:
                case SQLiteParser.NOT_:
                case SQLiteParser.NULL_:
                case SQLiteParser.NULLS_:
                case SQLiteParser.OF_:
                case SQLiteParser.OFFSET_:
                case SQLiteParser.OTHERS_:
                case SQLiteParser.OUTER_:
                case SQLiteParser.PARTITION_:
                case SQLiteParser.PLAN_:
                case SQLiteParser.PRAGMA_:
                case SQLiteParser.PRECEDING_:
                case SQLiteParser.QUERY_:
                case SQLiteParser.RAISE_:
                case SQLiteParser.RANGE_:
                case SQLiteParser.RECURSIVE_:
                case SQLiteParser.REGEXP_:
                case SQLiteParser.REINDEX_:
                case SQLiteParser.RELEASE_:
                case SQLiteParser.RENAME_:
                case SQLiteParser.REPLACE_:
                case SQLiteParser.RESTRICT_:
                case SQLiteParser.RIGHT_:
                case SQLiteParser.ROLLBACK_:
                case SQLiteParser.ROW_:
                case SQLiteParser.ROWID_:
                case SQLiteParser.ROWS_:
                case SQLiteParser.SAVEPOINT_:
                case SQLiteParser.STORED_:
                case SQLiteParser.STRICT_:
                case SQLiteParser.TEMP_:
                case SQLiteParser.TEMPORARY_:
                case SQLiteParser.TIES_:
                case SQLiteParser.TRIGGER_:
                case SQLiteParser.TRUE_:
                case SQLiteParser.UNBOUNDED_:
                case SQLiteParser.UNION_:
                case SQLiteParser.VACUUM_:
                case SQLiteParser.VIEW_:
                case SQLiteParser.VIRTUAL_:
                case SQLiteParser.WITH_:
                case SQLiteParser.WITHIN_:
                case SQLiteParser.WITHOUT_:
                case SQLiteParser.IDENTIFIER:
                case SQLiteParser.NUMERIC_LITERAL:
                case SQLiteParser.BIND_PARAMETER:
                case SQLiteParser.STRING_LITERAL:
                case SQLiteParser.BLOB_LITERAL:
                    {
                    this.state = 833;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 66) {
                        {
                        this.state = 832;
                        this.match(SQLiteParser.DISTINCT_);
                        }
                    }

                    this.state = 835;
                    this.expr();
                    this.state = 840;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 5) {
                        {
                        {
                        this.state = 836;
                        this.match(SQLiteParser.COMMA);
                        this.state = 837;
                        this.expr();
                        }
                        }
                        this.state = 842;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 844;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 125) {
                        {
                        this.state = 843;
                        this.order_clause();
                        }
                    }

                    }
                    break;
                case SQLiteParser.STAR:
                    {
                    this.state = 846;
                    this.match(SQLiteParser.STAR);
                    }
                    break;
                case SQLiteParser.CLOSE_PAR:
                    break;
                default:
                    break;
                }
                this.state = 849;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 851;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 107, this.context) ) {
                case 1:
                    {
                    this.state = 850;
                    this.percentile_clause();
                    }
                    break;
                }
                this.state = 854;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 80) {
                    {
                    this.state = 853;
                    this.filter_clause();
                    }
                }

                this.state = 857;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 128) {
                    {
                    this.state = 856;
                    this.over_clause();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 859;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 860;
                this.expr();
                this.state = 865;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 861;
                    this.match(SQLiteParser.COMMA);
                    this.state = 862;
                    this.expr();
                    }
                    }
                    this.state = 867;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 868;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 870;
                this.match(SQLiteParser.CAST_);
                this.state = 871;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 872;
                this.expr();
                this.state = 873;
                this.match(SQLiteParser.AS_);
                this.state = 874;
                this.type_name();
                this.state = 875;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 877;
                this.match(SQLiteParser.CASE_);
                this.state = 879;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1476396808) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2816818611) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 988249941) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 1674558519) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 3061775855) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4179599) !== 0)) {
                    {
                    this.state = 878;
                    this.expr();
                    }
                }

                this.state = 886;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 881;
                    this.match(SQLiteParser.WHEN_);
                    this.state = 882;
                    this.expr();
                    this.state = 883;
                    this.match(SQLiteParser.THEN_);
                    this.state = 884;
                    this.expr();
                    }
                    }
                    this.state = 888;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 174);
                this.state = 892;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 70) {
                    {
                    this.state = 890;
                    this.match(SQLiteParser.ELSE_);
                    this.state = 891;
                    this.expr();
                    }
                }

                this.state = 894;
                this.match(SQLiteParser.END_);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 896;
                this.expr_or();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_or(): Expr_orContext {
        let localContext = new Expr_orContext(this.context, this.state);
        this.enterRule(localContext, 66, SQLiteParser.RULE_expr_or);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 899;
            this.expr_and();
            this.state = 904;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 124) {
                {
                {
                this.state = 900;
                this.match(SQLiteParser.OR_);
                this.state = 901;
                this.expr_and();
                }
                }
                this.state = 906;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_and(): Expr_andContext {
        let localContext = new Expr_andContext(this.context, this.state);
        this.enterRule(localContext, 68, SQLiteParser.RULE_expr_and);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 907;
            this.expr_not();
            this.state = 912;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 35) {
                {
                {
                this.state = 908;
                this.match(SQLiteParser.AND_);
                this.state = 909;
                this.expr_not();
                }
                }
                this.state = 914;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_not(): Expr_notContext {
        let localContext = new Expr_notContext(this.context, this.state);
        this.enterRule(localContext, 70, SQLiteParser.RULE_expr_not);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 918;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 117, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 915;
                    this.match(SQLiteParser.NOT_);
                    }
                    }
                }
                this.state = 920;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 117, this.context);
            }
            this.state = 921;
            this.expr_binary();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_binary(): Expr_binaryContext {
        let localContext = new Expr_binaryContext(this.context, this.state);
        this.enterRule(localContext, 72, SQLiteParser.RULE_expr_binary);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 923;
            this.expr_comparison();
            this.state = 1006;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 133, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 1004;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 132, this.context) ) {
                    case 1:
                        {
                        this.state = 924;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 29360192) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 925;
                        this.expr_comparison();
                        }
                        break;
                    case 2:
                        {
                        this.state = 926;
                        this.match(SQLiteParser.IS_);
                        this.state = 928;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 118, this.context) ) {
                        case 1:
                            {
                            this.state = 927;
                            this.match(SQLiteParser.NOT_);
                            }
                            break;
                        }
                        this.state = 932;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 66) {
                            {
                            this.state = 930;
                            this.match(SQLiteParser.DISTINCT_);
                            this.state = 931;
                            this.match(SQLiteParser.FROM_);
                            }
                        }

                        this.state = 934;
                        this.expr_comparison();
                        }
                        break;
                    case 3:
                        {
                        this.state = 936;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 116) {
                            {
                            this.state = 935;
                            this.match(SQLiteParser.NOT_);
                            }
                        }

                        this.state = 938;
                        this.match(SQLiteParser.BETWEEN_);
                        this.state = 939;
                        this.expr_comparison();
                        this.state = 940;
                        this.match(SQLiteParser.AND_);
                        this.state = 941;
                        this.expr_comparison();
                        }
                        break;
                    case 4:
                        {
                        this.state = 944;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 116) {
                            {
                            this.state = 943;
                            this.match(SQLiteParser.NOT_);
                            }
                        }

                        this.state = 946;
                        this.match(SQLiteParser.IN_);
                        this.state = 985;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 128, this.context) ) {
                        case 1:
                            {
                            this.state = 947;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 957;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 123, this.context) ) {
                            case 1:
                                {
                                this.state = 948;
                                this.select_stmt();
                                }
                                break;
                            case 2:
                                {
                                this.state = 949;
                                this.expr_comparison();
                                this.state = 954;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                while (_la === 5) {
                                    {
                                    {
                                    this.state = 950;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 951;
                                    this.expr_comparison();
                                    }
                                    }
                                    this.state = 956;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                }
                                }
                                break;
                            }
                            this.state = 959;
                            this.match(SQLiteParser.CLOSE_PAR);
                            }
                            break;
                        case 2:
                            {
                            this.state = 963;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 124, this.context) ) {
                            case 1:
                                {
                                this.state = 960;
                                this.schema_name();
                                this.state = 961;
                                this.match(SQLiteParser.DOT);
                                }
                                break;
                            }
                            this.state = 965;
                            this.table_name();
                            }
                            break;
                        case 3:
                            {
                            this.state = 969;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 125, this.context) ) {
                            case 1:
                                {
                                this.state = 966;
                                this.schema_name();
                                this.state = 967;
                                this.match(SQLiteParser.DOT);
                                }
                                break;
                            }
                            this.state = 971;
                            this.table_function_name();
                            this.state = 972;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 981;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1476396808) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2816814515) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 988249941) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 1674558519) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 3061775855) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 4179599) !== 0)) {
                                {
                                this.state = 973;
                                this.expr_comparison();
                                this.state = 978;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                while (_la === 5) {
                                    {
                                    {
                                    this.state = 974;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 975;
                                    this.expr_comparison();
                                    }
                                    }
                                    this.state = 980;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                }
                                }
                            }

                            this.state = 983;
                            this.match(SQLiteParser.CLOSE_PAR);
                            }
                            break;
                        }
                        }
                        break;
                    case 5:
                        {
                        this.state = 988;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 116) {
                            {
                            this.state = 987;
                            this.match(SQLiteParser.NOT_);
                            }
                        }

                        this.state = 998;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case SQLiteParser.LIKE_:
                            {
                            this.state = 990;
                            this.match(SQLiteParser.LIKE_);
                            this.state = 991;
                            this.expr_comparison();
                            this.state = 994;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 72) {
                                {
                                this.state = 992;
                                this.match(SQLiteParser.ESCAPE_);
                                this.state = 993;
                                this.expr_comparison();
                                }
                            }

                            }
                            break;
                        case SQLiteParser.GLOB_:
                        case SQLiteParser.MATCH_:
                        case SQLiteParser.REGEXP_:
                            {
                            this.state = 996;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 88 || _la === 112 || _la === 139)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 997;
                            this.expr_comparison();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        break;
                    case 6:
                        {
                        this.state = 1000;
                        this.match(SQLiteParser.ISNULL_);
                        }
                        break;
                    case 7:
                        {
                        this.state = 1001;
                        this.match(SQLiteParser.NOTNULL_);
                        }
                        break;
                    case 8:
                        {
                        this.state = 1002;
                        this.match(SQLiteParser.NOT_);
                        this.state = 1003;
                        this.match(SQLiteParser.NULL_);
                        }
                        break;
                    }
                    }
                }
                this.state = 1008;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 133, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_comparison(): Expr_comparisonContext {
        let localContext = new Expr_comparisonContext(this.context, this.state);
        this.enterRule(localContext, 74, SQLiteParser.RULE_expr_comparison);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1009;
            this.expr_bitwise();
            this.state = 1014;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3932160) !== 0)) {
                {
                {
                this.state = 1010;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3932160) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1011;
                this.expr_bitwise();
                }
                }
                this.state = 1016;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_bitwise(): Expr_bitwiseContext {
        let localContext = new Expr_bitwiseContext(this.context, this.state);
        this.enterRule(localContext, 76, SQLiteParser.RULE_expr_bitwise);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1017;
            this.expr_addition();
            this.state = 1022;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 245760) !== 0)) {
                {
                {
                this.state = 1018;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 245760) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1019;
                this.expr_addition();
                }
                }
                this.state = 1024;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_addition(): Expr_additionContext {
        let localContext = new Expr_additionContext(this.context, this.state);
        this.enterRule(localContext, 78, SQLiteParser.RULE_expr_addition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1025;
            this.expr_multiplication();
            this.state = 1030;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8 || _la === 9) {
                {
                {
                this.state = 1026;
                _la = this.tokenStream.LA(1);
                if(!(_la === 8 || _la === 9)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1027;
                this.expr_multiplication();
                }
                }
                this.state = 1032;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_multiplication(): Expr_multiplicationContext {
        let localContext = new Expr_multiplicationContext(this.context, this.state);
        this.enterRule(localContext, 80, SQLiteParser.RULE_expr_multiplication);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1033;
            this.expr_string();
            this.state = 1038;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12416) !== 0)) {
                {
                {
                this.state = 1034;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 12416) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1035;
                this.expr_string();
                }
                }
                this.state = 1040;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_string(): Expr_stringContext {
        let localContext = new Expr_stringContext(this.context, this.state);
        this.enterRule(localContext, 82, SQLiteParser.RULE_expr_string);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1041;
            this.expr_collate();
            this.state = 1046;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 100665344) !== 0)) {
                {
                {
                this.state = 1042;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 100665344) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1043;
                this.expr_collate();
                }
                }
                this.state = 1048;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_collate(): Expr_collateContext {
        let localContext = new Expr_collateContext(this.context, this.state);
        this.enterRule(localContext, 84, SQLiteParser.RULE_expr_collate);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1049;
            this.expr_unary();
            this.state = 1054;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 139, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1050;
                    this.match(SQLiteParser.COLLATE_);
                    this.state = 1051;
                    this.collation_name();
                    }
                    }
                }
                this.state = 1056;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 139, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_unary(): Expr_unaryContext {
        let localContext = new Expr_unaryContext(this.context, this.state);
        this.enterRule(localContext, 86, SQLiteParser.RULE_expr_unary);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1060;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0)) {
                {
                {
                this.state = 1057;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 1062;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1063;
            this.expr_base();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_base(): Expr_baseContext {
        let localContext = new Expr_baseContext(this.context, this.state);
        this.enterRule(localContext, 88, SQLiteParser.RULE_expr_base);
        let _la: number;
        try {
            this.state = 1088;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 144, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1065;
                this.literal_value();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1066;
                this.match(SQLiteParser.BIND_PARAMETER);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1070;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 141, this.context) ) {
                case 1:
                    {
                    this.state = 1067;
                    this.schema_name();
                    this.state = 1068;
                    this.match(SQLiteParser.DOT);
                    }
                    break;
                }
                this.state = 1072;
                this.table_name();
                this.state = 1073;
                this.match(SQLiteParser.DOT);
                this.state = 1074;
                this.column_name();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1076;
                this.column_name_excluding_string();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1081;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 76 || _la === 116) {
                    {
                    this.state = 1078;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 116) {
                        {
                        this.state = 1077;
                        this.match(SQLiteParser.NOT_);
                        }
                    }

                    this.state = 1080;
                    this.match(SQLiteParser.EXISTS_);
                    }
                }

                this.state = 1083;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1084;
                this.select_stmt();
                this.state = 1085;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1087;
                this.raise_function();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public raise_function(): Raise_functionContext {
        let localContext = new Raise_functionContext(this.context, this.state);
        this.enterRule(localContext, 90, SQLiteParser.RULE_raise_function);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1090;
            this.match(SQLiteParser.RAISE_);
            this.state = 1091;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 1096;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.IGNORE_:
                {
                this.state = 1092;
                this.match(SQLiteParser.IGNORE_);
                }
                break;
            case SQLiteParser.ABORT_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.ROLLBACK_:
                {
                this.state = 1093;
                _la = this.tokenStream.LA(1);
                if(!(_la === 27 || _la === 78 || _la === 147)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1094;
                this.match(SQLiteParser.COMMA);
                this.state = 1095;
                this.error_message();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1098;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal_value(): Literal_valueContext {
        let localContext = new Literal_valueContext(this.context, this.state);
        this.enterRule(localContext, 92, SQLiteParser.RULE_literal_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1100;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 8388615) !== 0) || _la === 119 || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & 1703937) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public percentile_clause(): Percentile_clauseContext {
        let localContext = new Percentile_clauseContext(this.context, this.state);
        this.enterRule(localContext, 94, SQLiteParser.RULE_percentile_clause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1102;
            this.match(SQLiteParser.WITHIN_);
            this.state = 1103;
            this.match(SQLiteParser.GROUP_);
            this.state = 1104;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 1105;
            this.match(SQLiteParser.ORDER_);
            this.state = 1106;
            this.match(SQLiteParser.BY_);
            this.state = 1107;
            this.expr();
            this.state = 1108;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public value_row(): Value_rowContext {
        let localContext = new Value_rowContext(this.context, this.state);
        this.enterRule(localContext, 96, SQLiteParser.RULE_value_row);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1110;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 1111;
            this.expr();
            this.state = 1116;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1112;
                this.match(SQLiteParser.COMMA);
                this.state = 1113;
                this.expr();
                }
                }
                this.state = 1118;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1119;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public values_clause(): Values_clauseContext {
        let localContext = new Values_clauseContext(this.context, this.state);
        this.enterRule(localContext, 98, SQLiteParser.RULE_values_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1121;
            this.match(SQLiteParser.VALUES_);
            this.state = 1122;
            this.value_row();
            this.state = 1127;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1123;
                this.match(SQLiteParser.COMMA);
                this.state = 1124;
                this.value_row();
                }
                }
                this.state = 1129;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public insert_stmt(): Insert_stmtContext {
        let localContext = new Insert_stmtContext(this.context, this.state);
        this.enterRule(localContext, 100, SQLiteParser.RULE_insert_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1131;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 177) {
                {
                this.state = 1130;
                this.with_clause();
                }
            }

            this.state = 1138;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 149, this.context) ) {
            case 1:
                {
                this.state = 1133;
                this.match(SQLiteParser.INSERT_);
                }
                break;
            case 2:
                {
                this.state = 1134;
                this.match(SQLiteParser.REPLACE_);
                }
                break;
            case 3:
                {
                this.state = 1135;
                this.match(SQLiteParser.INSERT_);
                this.state = 1136;
                this.match(SQLiteParser.OR_);
                this.state = 1137;
                _la = this.tokenStream.LA(1);
                if(!(_la === 27 || _la === 78 || _la === 93 || _la === 143 || _la === 147)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1140;
            this.match(SQLiteParser.INTO_);
            this.state = 1144;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 150, this.context) ) {
            case 1:
                {
                this.state = 1141;
                this.schema_name();
                this.state = 1142;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 1146;
            this.table_name();
            this.state = 1149;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 36) {
                {
                this.state = 1147;
                this.match(SQLiteParser.AS_);
                this.state = 1148;
                this.table_alias();
                }
            }

            this.state = 1162;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 1151;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1152;
                this.column_name();
                this.state = 1157;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1153;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1154;
                    this.column_name();
                    }
                    }
                    this.state = 1159;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1160;
                this.match(SQLiteParser.CLOSE_PAR);
                }
            }

            this.state = 1173;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.SELECT_:
            case SQLiteParser.VALUES_:
            case SQLiteParser.WITH_:
                {
                this.state = 1164;
                this.select_stmt();
                this.state = 1168;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 123) {
                    {
                    {
                    this.state = 1165;
                    this.upsert_clause();
                    }
                    }
                    this.state = 1170;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case SQLiteParser.DEFAULT_:
                {
                this.state = 1171;
                this.match(SQLiteParser.DEFAULT_);
                this.state = 1172;
                this.match(SQLiteParser.VALUES_);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1176;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 1175;
                this.returning_clause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returning_clause(): Returning_clauseContext {
        let localContext = new Returning_clauseContext(this.context, this.state);
        this.enterRule(localContext, 102, SQLiteParser.RULE_returning_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1178;
            this.match(SQLiteParser.RETURNING_);
            this.state = 1187;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.STAR:
                {
                this.state = 1179;
                this.match(SQLiteParser.STAR);
                }
                break;
            case SQLiteParser.OPEN_PAR:
            case SQLiteParser.PLUS:
            case SQLiteParser.MINUS:
            case SQLiteParser.TILDE:
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CASE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CROSS_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DO_:
            case SQLiteParser.EACH_:
            case SQLiteParser.END_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUDE_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXISTS_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.FOR_:
            case SQLiteParser.FULL_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.INDEXED_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INNER_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LAST_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.MATERIALIZED_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.NO_:
            case SQLiteParser.NOT_:
            case SQLiteParser.NULL_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.OTHERS_:
            case SQLiteParser.OUTER_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RAISE_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.RIGHT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWID_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.STORED_:
            case SQLiteParser.STRICT_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.TIES_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.UNION_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHIN_:
            case SQLiteParser.WITHOUT_:
            case SQLiteParser.IDENTIFIER:
            case SQLiteParser.NUMERIC_LITERAL:
            case SQLiteParser.BIND_PARAMETER:
            case SQLiteParser.STRING_LITERAL:
            case SQLiteParser.BLOB_LITERAL:
                {
                this.state = 1180;
                this.expr();
                this.state = 1185;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 4182470347) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 3118323049) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 1895270119) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 3019370363) !== 0) || ((((_la - 158)) & ~0x1F) === 0 && ((1 << (_la - 158)) & 41472485) !== 0)) {
                    {
                    this.state = 1182;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 36) {
                        {
                        this.state = 1181;
                        this.match(SQLiteParser.AS_);
                        }
                    }

                    this.state = 1184;
                    this.column_alias();
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1202;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1189;
                this.match(SQLiteParser.COMMA);
                this.state = 1198;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.STAR:
                    {
                    this.state = 1190;
                    this.match(SQLiteParser.STAR);
                    }
                    break;
                case SQLiteParser.OPEN_PAR:
                case SQLiteParser.PLUS:
                case SQLiteParser.MINUS:
                case SQLiteParser.TILDE:
                case SQLiteParser.ABORT_:
                case SQLiteParser.ACTION_:
                case SQLiteParser.AFTER_:
                case SQLiteParser.ALWAYS_:
                case SQLiteParser.ANALYZE_:
                case SQLiteParser.ASC_:
                case SQLiteParser.ATTACH_:
                case SQLiteParser.BEFORE_:
                case SQLiteParser.BEGIN_:
                case SQLiteParser.BY_:
                case SQLiteParser.CASCADE_:
                case SQLiteParser.CASE_:
                case SQLiteParser.CAST_:
                case SQLiteParser.COLUMN_:
                case SQLiteParser.CONFLICT_:
                case SQLiteParser.CROSS_:
                case SQLiteParser.CURRENT_:
                case SQLiteParser.CURRENT_DATE_:
                case SQLiteParser.CURRENT_TIME_:
                case SQLiteParser.CURRENT_TIMESTAMP_:
                case SQLiteParser.DATABASE_:
                case SQLiteParser.DEFERRED_:
                case SQLiteParser.DESC_:
                case SQLiteParser.DETACH_:
                case SQLiteParser.DO_:
                case SQLiteParser.EACH_:
                case SQLiteParser.END_:
                case SQLiteParser.EXCEPT_:
                case SQLiteParser.EXCLUDE_:
                case SQLiteParser.EXCLUSIVE_:
                case SQLiteParser.EXISTS_:
                case SQLiteParser.EXPLAIN_:
                case SQLiteParser.FAIL_:
                case SQLiteParser.FALSE_:
                case SQLiteParser.FIRST_:
                case SQLiteParser.FOLLOWING_:
                case SQLiteParser.FOR_:
                case SQLiteParser.FULL_:
                case SQLiteParser.GENERATED_:
                case SQLiteParser.GLOB_:
                case SQLiteParser.GROUPS_:
                case SQLiteParser.IF_:
                case SQLiteParser.IGNORE_:
                case SQLiteParser.IMMEDIATE_:
                case SQLiteParser.INDEXED_:
                case SQLiteParser.INITIALLY_:
                case SQLiteParser.INNER_:
                case SQLiteParser.INSTEAD_:
                case SQLiteParser.INTERSECT_:
                case SQLiteParser.KEY_:
                case SQLiteParser.LAST_:
                case SQLiteParser.LEFT_:
                case SQLiteParser.LIKE_:
                case SQLiteParser.MATCH_:
                case SQLiteParser.MATERIALIZED_:
                case SQLiteParser.NATURAL_:
                case SQLiteParser.NO_:
                case SQLiteParser.NOT_:
                case SQLiteParser.NULL_:
                case SQLiteParser.NULLS_:
                case SQLiteParser.OF_:
                case SQLiteParser.OFFSET_:
                case SQLiteParser.OTHERS_:
                case SQLiteParser.OUTER_:
                case SQLiteParser.PARTITION_:
                case SQLiteParser.PLAN_:
                case SQLiteParser.PRAGMA_:
                case SQLiteParser.PRECEDING_:
                case SQLiteParser.QUERY_:
                case SQLiteParser.RAISE_:
                case SQLiteParser.RANGE_:
                case SQLiteParser.RECURSIVE_:
                case SQLiteParser.REGEXP_:
                case SQLiteParser.REINDEX_:
                case SQLiteParser.RELEASE_:
                case SQLiteParser.RENAME_:
                case SQLiteParser.REPLACE_:
                case SQLiteParser.RESTRICT_:
                case SQLiteParser.RIGHT_:
                case SQLiteParser.ROLLBACK_:
                case SQLiteParser.ROW_:
                case SQLiteParser.ROWID_:
                case SQLiteParser.ROWS_:
                case SQLiteParser.SAVEPOINT_:
                case SQLiteParser.STORED_:
                case SQLiteParser.STRICT_:
                case SQLiteParser.TEMP_:
                case SQLiteParser.TEMPORARY_:
                case SQLiteParser.TIES_:
                case SQLiteParser.TRIGGER_:
                case SQLiteParser.TRUE_:
                case SQLiteParser.UNBOUNDED_:
                case SQLiteParser.UNION_:
                case SQLiteParser.VACUUM_:
                case SQLiteParser.VIEW_:
                case SQLiteParser.VIRTUAL_:
                case SQLiteParser.WITH_:
                case SQLiteParser.WITHIN_:
                case SQLiteParser.WITHOUT_:
                case SQLiteParser.IDENTIFIER:
                case SQLiteParser.NUMERIC_LITERAL:
                case SQLiteParser.BIND_PARAMETER:
                case SQLiteParser.STRING_LITERAL:
                case SQLiteParser.BLOB_LITERAL:
                    {
                    this.state = 1191;
                    this.expr();
                    this.state = 1196;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 4182470347) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 3118323049) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 1895270119) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 3019370363) !== 0) || ((((_la - 158)) & ~0x1F) === 0 && ((1 << (_la - 158)) & 41472485) !== 0)) {
                        {
                        this.state = 1193;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 36) {
                            {
                            this.state = 1192;
                            this.match(SQLiteParser.AS_);
                            }
                        }

                        this.state = 1195;
                        this.column_alias();
                        }
                    }

                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                }
                this.state = 1204;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public upsert_clause(): Upsert_clauseContext {
        let localContext = new Upsert_clauseContext(this.context, this.state);
        this.enterRule(localContext, 104, SQLiteParser.RULE_upsert_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1205;
            this.match(SQLiteParser.ON_);
            this.state = 1206;
            this.match(SQLiteParser.CONFLICT_);
            this.state = 1221;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 1207;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1208;
                this.indexed_column();
                this.state = 1213;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1209;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1210;
                    this.indexed_column();
                    }
                    }
                    this.state = 1215;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1216;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1219;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 175) {
                    {
                    this.state = 1217;
                    this.match(SQLiteParser.WHERE_);
                    this.state = 1218;
                    this.expr();
                    }
                }

                }
            }

            this.state = 1223;
            this.match(SQLiteParser.DO_);
            this.state = 1250;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.NOTHING_:
                {
                this.state = 1224;
                this.match(SQLiteParser.NOTHING_);
                }
                break;
            case SQLiteParser.UPDATE_:
                {
                this.state = 1225;
                this.match(SQLiteParser.UPDATE_);
                this.state = 1226;
                this.match(SQLiteParser.SET_);
                this.state = 1229;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.ABORT_:
                case SQLiteParser.ACTION_:
                case SQLiteParser.AFTER_:
                case SQLiteParser.ALWAYS_:
                case SQLiteParser.ANALYZE_:
                case SQLiteParser.ASC_:
                case SQLiteParser.ATTACH_:
                case SQLiteParser.BEFORE_:
                case SQLiteParser.BEGIN_:
                case SQLiteParser.BY_:
                case SQLiteParser.CASCADE_:
                case SQLiteParser.CAST_:
                case SQLiteParser.COLUMN_:
                case SQLiteParser.CONFLICT_:
                case SQLiteParser.CROSS_:
                case SQLiteParser.CURRENT_:
                case SQLiteParser.CURRENT_DATE_:
                case SQLiteParser.CURRENT_TIME_:
                case SQLiteParser.CURRENT_TIMESTAMP_:
                case SQLiteParser.DATABASE_:
                case SQLiteParser.DEFERRED_:
                case SQLiteParser.DESC_:
                case SQLiteParser.DETACH_:
                case SQLiteParser.DO_:
                case SQLiteParser.EACH_:
                case SQLiteParser.END_:
                case SQLiteParser.EXCEPT_:
                case SQLiteParser.EXCLUDE_:
                case SQLiteParser.EXCLUSIVE_:
                case SQLiteParser.EXPLAIN_:
                case SQLiteParser.FAIL_:
                case SQLiteParser.FALSE_:
                case SQLiteParser.FIRST_:
                case SQLiteParser.FOLLOWING_:
                case SQLiteParser.FOR_:
                case SQLiteParser.FULL_:
                case SQLiteParser.GENERATED_:
                case SQLiteParser.GLOB_:
                case SQLiteParser.GROUPS_:
                case SQLiteParser.IF_:
                case SQLiteParser.IGNORE_:
                case SQLiteParser.IMMEDIATE_:
                case SQLiteParser.INDEXED_:
                case SQLiteParser.INITIALLY_:
                case SQLiteParser.INNER_:
                case SQLiteParser.INSTEAD_:
                case SQLiteParser.INTERSECT_:
                case SQLiteParser.KEY_:
                case SQLiteParser.LAST_:
                case SQLiteParser.LEFT_:
                case SQLiteParser.LIKE_:
                case SQLiteParser.MATCH_:
                case SQLiteParser.MATERIALIZED_:
                case SQLiteParser.NATURAL_:
                case SQLiteParser.NO_:
                case SQLiteParser.NULLS_:
                case SQLiteParser.OF_:
                case SQLiteParser.OFFSET_:
                case SQLiteParser.OTHERS_:
                case SQLiteParser.OUTER_:
                case SQLiteParser.PARTITION_:
                case SQLiteParser.PLAN_:
                case SQLiteParser.PRAGMA_:
                case SQLiteParser.PRECEDING_:
                case SQLiteParser.QUERY_:
                case SQLiteParser.RAISE_:
                case SQLiteParser.RANGE_:
                case SQLiteParser.RECURSIVE_:
                case SQLiteParser.REGEXP_:
                case SQLiteParser.REINDEX_:
                case SQLiteParser.RELEASE_:
                case SQLiteParser.RENAME_:
                case SQLiteParser.REPLACE_:
                case SQLiteParser.RESTRICT_:
                case SQLiteParser.RIGHT_:
                case SQLiteParser.ROLLBACK_:
                case SQLiteParser.ROW_:
                case SQLiteParser.ROWID_:
                case SQLiteParser.ROWS_:
                case SQLiteParser.SAVEPOINT_:
                case SQLiteParser.STORED_:
                case SQLiteParser.STRICT_:
                case SQLiteParser.TEMP_:
                case SQLiteParser.TEMPORARY_:
                case SQLiteParser.TIES_:
                case SQLiteParser.TRIGGER_:
                case SQLiteParser.TRUE_:
                case SQLiteParser.UNBOUNDED_:
                case SQLiteParser.UNION_:
                case SQLiteParser.VACUUM_:
                case SQLiteParser.VIEW_:
                case SQLiteParser.VIRTUAL_:
                case SQLiteParser.WITH_:
                case SQLiteParser.WITHIN_:
                case SQLiteParser.WITHOUT_:
                case SQLiteParser.IDENTIFIER:
                case SQLiteParser.STRING_LITERAL:
                    {
                    this.state = 1227;
                    this.column_name();
                    }
                    break;
                case SQLiteParser.OPEN_PAR:
                    {
                    this.state = 1228;
                    this.column_name_list();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1231;
                this.match(SQLiteParser.ASSIGN);
                this.state = 1232;
                this.expr();
                this.state = 1243;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1233;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1236;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.ABORT_:
                    case SQLiteParser.ACTION_:
                    case SQLiteParser.AFTER_:
                    case SQLiteParser.ALWAYS_:
                    case SQLiteParser.ANALYZE_:
                    case SQLiteParser.ASC_:
                    case SQLiteParser.ATTACH_:
                    case SQLiteParser.BEFORE_:
                    case SQLiteParser.BEGIN_:
                    case SQLiteParser.BY_:
                    case SQLiteParser.CASCADE_:
                    case SQLiteParser.CAST_:
                    case SQLiteParser.COLUMN_:
                    case SQLiteParser.CONFLICT_:
                    case SQLiteParser.CROSS_:
                    case SQLiteParser.CURRENT_:
                    case SQLiteParser.CURRENT_DATE_:
                    case SQLiteParser.CURRENT_TIME_:
                    case SQLiteParser.CURRENT_TIMESTAMP_:
                    case SQLiteParser.DATABASE_:
                    case SQLiteParser.DEFERRED_:
                    case SQLiteParser.DESC_:
                    case SQLiteParser.DETACH_:
                    case SQLiteParser.DO_:
                    case SQLiteParser.EACH_:
                    case SQLiteParser.END_:
                    case SQLiteParser.EXCEPT_:
                    case SQLiteParser.EXCLUDE_:
                    case SQLiteParser.EXCLUSIVE_:
                    case SQLiteParser.EXPLAIN_:
                    case SQLiteParser.FAIL_:
                    case SQLiteParser.FALSE_:
                    case SQLiteParser.FIRST_:
                    case SQLiteParser.FOLLOWING_:
                    case SQLiteParser.FOR_:
                    case SQLiteParser.FULL_:
                    case SQLiteParser.GENERATED_:
                    case SQLiteParser.GLOB_:
                    case SQLiteParser.GROUPS_:
                    case SQLiteParser.IF_:
                    case SQLiteParser.IGNORE_:
                    case SQLiteParser.IMMEDIATE_:
                    case SQLiteParser.INDEXED_:
                    case SQLiteParser.INITIALLY_:
                    case SQLiteParser.INNER_:
                    case SQLiteParser.INSTEAD_:
                    case SQLiteParser.INTERSECT_:
                    case SQLiteParser.KEY_:
                    case SQLiteParser.LAST_:
                    case SQLiteParser.LEFT_:
                    case SQLiteParser.LIKE_:
                    case SQLiteParser.MATCH_:
                    case SQLiteParser.MATERIALIZED_:
                    case SQLiteParser.NATURAL_:
                    case SQLiteParser.NO_:
                    case SQLiteParser.NULLS_:
                    case SQLiteParser.OF_:
                    case SQLiteParser.OFFSET_:
                    case SQLiteParser.OTHERS_:
                    case SQLiteParser.OUTER_:
                    case SQLiteParser.PARTITION_:
                    case SQLiteParser.PLAN_:
                    case SQLiteParser.PRAGMA_:
                    case SQLiteParser.PRECEDING_:
                    case SQLiteParser.QUERY_:
                    case SQLiteParser.RAISE_:
                    case SQLiteParser.RANGE_:
                    case SQLiteParser.RECURSIVE_:
                    case SQLiteParser.REGEXP_:
                    case SQLiteParser.REINDEX_:
                    case SQLiteParser.RELEASE_:
                    case SQLiteParser.RENAME_:
                    case SQLiteParser.REPLACE_:
                    case SQLiteParser.RESTRICT_:
                    case SQLiteParser.RIGHT_:
                    case SQLiteParser.ROLLBACK_:
                    case SQLiteParser.ROW_:
                    case SQLiteParser.ROWID_:
                    case SQLiteParser.ROWS_:
                    case SQLiteParser.SAVEPOINT_:
                    case SQLiteParser.STORED_:
                    case SQLiteParser.STRICT_:
                    case SQLiteParser.TEMP_:
                    case SQLiteParser.TEMPORARY_:
                    case SQLiteParser.TIES_:
                    case SQLiteParser.TRIGGER_:
                    case SQLiteParser.TRUE_:
                    case SQLiteParser.UNBOUNDED_:
                    case SQLiteParser.UNION_:
                    case SQLiteParser.VACUUM_:
                    case SQLiteParser.VIEW_:
                    case SQLiteParser.VIRTUAL_:
                    case SQLiteParser.WITH_:
                    case SQLiteParser.WITHIN_:
                    case SQLiteParser.WITHOUT_:
                    case SQLiteParser.IDENTIFIER:
                    case SQLiteParser.STRING_LITERAL:
                        {
                        this.state = 1234;
                        this.column_name();
                        }
                        break;
                    case SQLiteParser.OPEN_PAR:
                        {
                        this.state = 1235;
                        this.column_name_list();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1238;
                    this.match(SQLiteParser.ASSIGN);
                    this.state = 1239;
                    this.expr();
                    }
                    }
                    this.state = 1245;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1248;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 175) {
                    {
                    this.state = 1246;
                    this.match(SQLiteParser.WHERE_);
                    this.state = 1247;
                    this.expr();
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pragma_stmt(): Pragma_stmtContext {
        let localContext = new Pragma_stmtContext(this.context, this.state);
        this.enterRule(localContext, 106, SQLiteParser.RULE_pragma_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1252;
            this.match(SQLiteParser.PRAGMA_);
            this.state = 1256;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 172, this.context) ) {
            case 1:
                {
                this.state = 1253;
                this.schema_name();
                this.state = 1254;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 1258;
            this.pragma_name();
            this.state = 1265;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.ASSIGN:
                {
                this.state = 1259;
                this.match(SQLiteParser.ASSIGN);
                this.state = 1260;
                this.pragma_value();
                }
                break;
            case SQLiteParser.OPEN_PAR:
                {
                this.state = 1261;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1262;
                this.pragma_value();
                this.state = 1263;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case SQLiteParser.EOF:
            case SQLiteParser.SCOL:
                break;
            default:
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pragma_value(): Pragma_valueContext {
        let localContext = new Pragma_valueContext(this.context, this.state);
        this.enterRule(localContext, 108, SQLiteParser.RULE_pragma_value);
        try {
            this.state = 1270;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 174, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1267;
                this.signed_number();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1268;
                this.name();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1269;
                this.match(SQLiteParser.STRING_LITERAL);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public reindex_stmt(): Reindex_stmtContext {
        let localContext = new Reindex_stmtContext(this.context, this.state);
        this.enterRule(localContext, 110, SQLiteParser.RULE_reindex_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1272;
            this.match(SQLiteParser.REINDEX_);
            this.state = 1283;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 177, this.context) ) {
            case 1:
                {
                this.state = 1273;
                this.collation_name();
                }
                break;
            case 2:
                {
                this.state = 1277;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 175, this.context) ) {
                case 1:
                    {
                    this.state = 1274;
                    this.schema_name();
                    this.state = 1275;
                    this.match(SQLiteParser.DOT);
                    }
                    break;
                }
                this.state = 1281;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 176, this.context) ) {
                case 1:
                    {
                    this.state = 1279;
                    this.table_name();
                    }
                    break;
                case 2:
                    {
                    this.state = 1280;
                    this.index_name();
                    }
                    break;
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public select_stmt(): Select_stmtContext {
        let localContext = new Select_stmtContext(this.context, this.state);
        this.enterRule(localContext, 112, SQLiteParser.RULE_select_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1286;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 177) {
                {
                this.state = 1285;
                this.with_clause();
                }
            }

            this.state = 1288;
            this.select_core();
            this.state = 1294;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 73 || _la === 102 || _la === 166) {
                {
                {
                this.state = 1289;
                this.compound_operator();
                this.state = 1290;
                this.select_core();
                }
                }
                this.state = 1296;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1298;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 125) {
                {
                this.state = 1297;
                this.order_clause();
                }
            }

            this.state = 1301;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 111) {
                {
                this.state = 1300;
                this.limit_clause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public join_clause(): Join_clauseContext {
        let localContext = new Join_clauseContext(this.context, this.state);
        this.enterRule(localContext, 114, SQLiteParser.RULE_join_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1303;
            this.table_or_subquery();
            this.state = 1311;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5 || _la === 54 || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 277880833) !== 0) || _la === 146) {
                {
                {
                this.state = 1304;
                this.join_operator();
                this.state = 1305;
                this.table_or_subquery();
                this.state = 1307;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 182, this.context) ) {
                case 1:
                    {
                    this.state = 1306;
                    this.join_constraint();
                    }
                    break;
                }
                }
                }
                this.state = 1313;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public select_core(): Select_coreContext {
        let localContext = new Select_coreContext(this.context, this.state);
        this.enterRule(localContext, 116, SQLiteParser.RULE_select_core);
        let _la: number;
        try {
            this.state = 1367;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.SELECT_:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1314;
                this.match(SQLiteParser.SELECT_);
                this.state = 1316;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 31 || _la === 66) {
                    {
                    this.state = 1315;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 31 || _la === 66)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                this.state = 1318;
                this.result_column();
                this.state = 1323;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1319;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1320;
                    this.result_column();
                    }
                    }
                    this.state = 1325;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1328;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 85) {
                    {
                    this.state = 1326;
                    this.match(SQLiteParser.FROM_);
                    this.state = 1327;
                    this.join_clause();
                    }
                }

                this.state = 1332;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 175) {
                    {
                    this.state = 1330;
                    this.match(SQLiteParser.WHERE_);
                    this.state = 1331;
                    localContext._where_expr = this.expr();
                    }
                }

                this.state = 1348;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 89) {
                    {
                    this.state = 1334;
                    this.match(SQLiteParser.GROUP_);
                    this.state = 1335;
                    this.match(SQLiteParser.BY_);
                    this.state = 1336;
                    localContext._expr = this.expr();
                    localContext._group_by_expr.push(localContext._expr!);
                    this.state = 1341;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 5) {
                        {
                        {
                        this.state = 1337;
                        this.match(SQLiteParser.COMMA);
                        this.state = 1338;
                        localContext._expr = this.expr();
                        localContext._group_by_expr.push(localContext._expr!);
                        }
                        }
                        this.state = 1343;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 1346;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 91) {
                        {
                        this.state = 1344;
                        this.match(SQLiteParser.HAVING_);
                        this.state = 1345;
                        localContext._having_expr = this.expr();
                        }
                    }

                    }
                }

                this.state = 1364;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 176) {
                    {
                    this.state = 1350;
                    this.match(SQLiteParser.WINDOW_);
                    this.state = 1351;
                    this.window_name();
                    this.state = 1352;
                    this.match(SQLiteParser.AS_);
                    this.state = 1353;
                    this.window_defn();
                    this.state = 1361;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 5) {
                        {
                        {
                        this.state = 1354;
                        this.match(SQLiteParser.COMMA);
                        this.state = 1355;
                        this.window_name();
                        this.state = 1356;
                        this.match(SQLiteParser.AS_);
                        this.state = 1357;
                        this.window_defn();
                        }
                        }
                        this.state = 1363;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                }
                break;
            case SQLiteParser.VALUES_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1366;
                this.values_clause();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public table_or_subquery(): Table_or_subqueryContext {
        let localContext = new Table_or_subqueryContext(this.context, this.state);
        this.enterRule(localContext, 118, SQLiteParser.RULE_table_or_subquery);
        let _la: number;
        try {
            this.state = 1422;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 203, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1372;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 194, this.context) ) {
                case 1:
                    {
                    this.state = 1369;
                    this.schema_name();
                    this.state = 1370;
                    this.match(SQLiteParser.DOT);
                    }
                    break;
                }
                this.state = 1374;
                this.table_name();
                this.state = 1378;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 195, this.context) ) {
                case 1:
                    {
                    this.state = 1375;
                    this.match(SQLiteParser.AS_);
                    this.state = 1376;
                    this.table_alias();
                    }
                    break;
                case 2:
                    {
                    this.state = 1377;
                    this.table_alias_excluding_joins();
                    }
                    break;
                }
                this.state = 1385;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.INDEXED_:
                    {
                    this.state = 1380;
                    this.match(SQLiteParser.INDEXED_);
                    this.state = 1381;
                    this.match(SQLiteParser.BY_);
                    this.state = 1382;
                    this.index_name();
                    }
                    break;
                case SQLiteParser.NOT_:
                    {
                    this.state = 1383;
                    this.match(SQLiteParser.NOT_);
                    this.state = 1384;
                    this.match(SQLiteParser.INDEXED_);
                    }
                    break;
                case SQLiteParser.EOF:
                case SQLiteParser.SCOL:
                case SQLiteParser.CLOSE_PAR:
                case SQLiteParser.COMMA:
                case SQLiteParser.CROSS_:
                case SQLiteParser.EXCEPT_:
                case SQLiteParser.FULL_:
                case SQLiteParser.GROUP_:
                case SQLiteParser.INNER_:
                case SQLiteParser.INTERSECT_:
                case SQLiteParser.JOIN_:
                case SQLiteParser.LEFT_:
                case SQLiteParser.LIMIT_:
                case SQLiteParser.NATURAL_:
                case SQLiteParser.ON_:
                case SQLiteParser.ORDER_:
                case SQLiteParser.RETURNING_:
                case SQLiteParser.RIGHT_:
                case SQLiteParser.UNION_:
                case SQLiteParser.USING_:
                case SQLiteParser.WHERE_:
                case SQLiteParser.WINDOW_:
                    break;
                default:
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1390;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 197, this.context) ) {
                case 1:
                    {
                    this.state = 1387;
                    this.schema_name();
                    this.state = 1388;
                    this.match(SQLiteParser.DOT);
                    }
                    break;
                }
                this.state = 1392;
                this.table_function_name();
                this.state = 1393;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1394;
                this.expr();
                this.state = 1399;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1395;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1396;
                    this.expr();
                    }
                    }
                    this.state = 1401;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1402;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1407;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 200, this.context) ) {
                case 1:
                    {
                    this.state = 1404;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 36) {
                        {
                        this.state = 1403;
                        this.match(SQLiteParser.AS_);
                        }
                    }

                    this.state = 1406;
                    this.table_alias();
                    }
                    break;
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1409;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1410;
                this.join_clause();
                this.state = 1411;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1413;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1414;
                this.select_stmt();
                this.state = 1415;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1420;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 202, this.context) ) {
                case 1:
                    {
                    this.state = 1417;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 36) {
                        {
                        this.state = 1416;
                        this.match(SQLiteParser.AS_);
                        }
                    }

                    this.state = 1419;
                    this.table_alias();
                    }
                    break;
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public result_column(): Result_columnContext {
        let localContext = new Result_columnContext(this.context, this.state);
        this.enterRule(localContext, 120, SQLiteParser.RULE_result_column);
        let _la: number;
        try {
            this.state = 1436;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 206, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1424;
                this.match(SQLiteParser.STAR);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1425;
                this.table_name();
                this.state = 1426;
                this.match(SQLiteParser.DOT);
                this.state = 1427;
                this.match(SQLiteParser.STAR);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1429;
                this.expr();
                this.state = 1434;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 205, this.context) ) {
                case 1:
                    {
                    this.state = 1431;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 36) {
                        {
                        this.state = 1430;
                        this.match(SQLiteParser.AS_);
                        }
                    }

                    this.state = 1433;
                    this.column_alias();
                    }
                    break;
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public join_operator(): Join_operatorContext {
        let localContext = new Join_operatorContext(this.context, this.state);
        this.enterRule(localContext, 122, SQLiteParser.RULE_join_operator);
        let _la: number;
        try {
            this.state = 1451;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.COMMA:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1438;
                this.match(SQLiteParser.COMMA);
                }
                break;
            case SQLiteParser.CROSS_:
            case SQLiteParser.FULL_:
            case SQLiteParser.INNER_:
            case SQLiteParser.JOIN_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.RIGHT_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1440;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 114) {
                    {
                    this.state = 1439;
                    this.match(SQLiteParser.NATURAL_);
                    }
                }

                this.state = 1448;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.FULL_:
                case SQLiteParser.LEFT_:
                case SQLiteParser.RIGHT_:
                    {
                    this.state = 1442;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 86 || _la === 109 || _la === 146)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1444;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 127) {
                        {
                        this.state = 1443;
                        this.match(SQLiteParser.OUTER_);
                        }
                    }

                    }
                    break;
                case SQLiteParser.INNER_:
                    {
                    this.state = 1446;
                    this.match(SQLiteParser.INNER_);
                    }
                    break;
                case SQLiteParser.CROSS_:
                    {
                    this.state = 1447;
                    this.match(SQLiteParser.CROSS_);
                    }
                    break;
                case SQLiteParser.JOIN_:
                    break;
                default:
                    break;
                }
                this.state = 1450;
                this.match(SQLiteParser.JOIN_);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public join_constraint(): Join_constraintContext {
        let localContext = new Join_constraintContext(this.context, this.state);
        this.enterRule(localContext, 124, SQLiteParser.RULE_join_constraint);
        let _la: number;
        try {
            this.state = 1467;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.ON_:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1453;
                this.match(SQLiteParser.ON_);
                this.state = 1454;
                this.expr();
                }
                break;
            case SQLiteParser.USING_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1455;
                this.match(SQLiteParser.USING_);
                this.state = 1456;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1457;
                this.column_name();
                this.state = 1462;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1458;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1459;
                    this.column_name();
                    }
                    }
                    this.state = 1464;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1465;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public compound_operator(): Compound_operatorContext {
        let localContext = new Compound_operatorContext(this.context, this.state);
        this.enterRule(localContext, 126, SQLiteParser.RULE_compound_operator);
        let _la: number;
        try {
            this.state = 1475;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.UNION_:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1469;
                this.match(SQLiteParser.UNION_);
                this.state = 1471;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 31) {
                    {
                    this.state = 1470;
                    this.match(SQLiteParser.ALL_);
                    }
                }

                }
                break;
            case SQLiteParser.INTERSECT_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1473;
                this.match(SQLiteParser.INTERSECT_);
                }
                break;
            case SQLiteParser.EXCEPT_:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1474;
                this.match(SQLiteParser.EXCEPT_);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public update_stmt(): Update_stmtContext {
        let localContext = new Update_stmtContext(this.context, this.state);
        this.enterRule(localContext, 128, SQLiteParser.RULE_update_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1478;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 177) {
                {
                this.state = 1477;
                this.with_clause();
                }
            }

            this.state = 1480;
            this.match(SQLiteParser.UPDATE_);
            this.state = 1483;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 124) {
                {
                this.state = 1481;
                this.match(SQLiteParser.OR_);
                this.state = 1482;
                _la = this.tokenStream.LA(1);
                if(!(_la === 27 || _la === 78 || _la === 93 || _la === 143 || _la === 147)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1485;
            this.qualified_table_name();
            this.state = 1486;
            this.match(SQLiteParser.SET_);
            this.state = 1489;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CROSS_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DO_:
            case SQLiteParser.EACH_:
            case SQLiteParser.END_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUDE_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.FOR_:
            case SQLiteParser.FULL_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.INDEXED_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INNER_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LAST_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.MATERIALIZED_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.NO_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.OTHERS_:
            case SQLiteParser.OUTER_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RAISE_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.RIGHT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWID_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.STORED_:
            case SQLiteParser.STRICT_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.TIES_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.UNION_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHIN_:
            case SQLiteParser.WITHOUT_:
            case SQLiteParser.IDENTIFIER:
            case SQLiteParser.STRING_LITERAL:
                {
                this.state = 1487;
                this.column_name();
                }
                break;
            case SQLiteParser.OPEN_PAR:
                {
                this.state = 1488;
                this.column_name_list();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1491;
            this.match(SQLiteParser.ASSIGN);
            this.state = 1492;
            this.expr();
            this.state = 1503;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1493;
                this.match(SQLiteParser.COMMA);
                this.state = 1496;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.ABORT_:
                case SQLiteParser.ACTION_:
                case SQLiteParser.AFTER_:
                case SQLiteParser.ALWAYS_:
                case SQLiteParser.ANALYZE_:
                case SQLiteParser.ASC_:
                case SQLiteParser.ATTACH_:
                case SQLiteParser.BEFORE_:
                case SQLiteParser.BEGIN_:
                case SQLiteParser.BY_:
                case SQLiteParser.CASCADE_:
                case SQLiteParser.CAST_:
                case SQLiteParser.COLUMN_:
                case SQLiteParser.CONFLICT_:
                case SQLiteParser.CROSS_:
                case SQLiteParser.CURRENT_:
                case SQLiteParser.CURRENT_DATE_:
                case SQLiteParser.CURRENT_TIME_:
                case SQLiteParser.CURRENT_TIMESTAMP_:
                case SQLiteParser.DATABASE_:
                case SQLiteParser.DEFERRED_:
                case SQLiteParser.DESC_:
                case SQLiteParser.DETACH_:
                case SQLiteParser.DO_:
                case SQLiteParser.EACH_:
                case SQLiteParser.END_:
                case SQLiteParser.EXCEPT_:
                case SQLiteParser.EXCLUDE_:
                case SQLiteParser.EXCLUSIVE_:
                case SQLiteParser.EXPLAIN_:
                case SQLiteParser.FAIL_:
                case SQLiteParser.FALSE_:
                case SQLiteParser.FIRST_:
                case SQLiteParser.FOLLOWING_:
                case SQLiteParser.FOR_:
                case SQLiteParser.FULL_:
                case SQLiteParser.GENERATED_:
                case SQLiteParser.GLOB_:
                case SQLiteParser.GROUPS_:
                case SQLiteParser.IF_:
                case SQLiteParser.IGNORE_:
                case SQLiteParser.IMMEDIATE_:
                case SQLiteParser.INDEXED_:
                case SQLiteParser.INITIALLY_:
                case SQLiteParser.INNER_:
                case SQLiteParser.INSTEAD_:
                case SQLiteParser.INTERSECT_:
                case SQLiteParser.KEY_:
                case SQLiteParser.LAST_:
                case SQLiteParser.LEFT_:
                case SQLiteParser.LIKE_:
                case SQLiteParser.MATCH_:
                case SQLiteParser.MATERIALIZED_:
                case SQLiteParser.NATURAL_:
                case SQLiteParser.NO_:
                case SQLiteParser.NULLS_:
                case SQLiteParser.OF_:
                case SQLiteParser.OFFSET_:
                case SQLiteParser.OTHERS_:
                case SQLiteParser.OUTER_:
                case SQLiteParser.PARTITION_:
                case SQLiteParser.PLAN_:
                case SQLiteParser.PRAGMA_:
                case SQLiteParser.PRECEDING_:
                case SQLiteParser.QUERY_:
                case SQLiteParser.RAISE_:
                case SQLiteParser.RANGE_:
                case SQLiteParser.RECURSIVE_:
                case SQLiteParser.REGEXP_:
                case SQLiteParser.REINDEX_:
                case SQLiteParser.RELEASE_:
                case SQLiteParser.RENAME_:
                case SQLiteParser.REPLACE_:
                case SQLiteParser.RESTRICT_:
                case SQLiteParser.RIGHT_:
                case SQLiteParser.ROLLBACK_:
                case SQLiteParser.ROW_:
                case SQLiteParser.ROWID_:
                case SQLiteParser.ROWS_:
                case SQLiteParser.SAVEPOINT_:
                case SQLiteParser.STORED_:
                case SQLiteParser.STRICT_:
                case SQLiteParser.TEMP_:
                case SQLiteParser.TEMPORARY_:
                case SQLiteParser.TIES_:
                case SQLiteParser.TRIGGER_:
                case SQLiteParser.TRUE_:
                case SQLiteParser.UNBOUNDED_:
                case SQLiteParser.UNION_:
                case SQLiteParser.VACUUM_:
                case SQLiteParser.VIEW_:
                case SQLiteParser.VIRTUAL_:
                case SQLiteParser.WITH_:
                case SQLiteParser.WITHIN_:
                case SQLiteParser.WITHOUT_:
                case SQLiteParser.IDENTIFIER:
                case SQLiteParser.STRING_LITERAL:
                    {
                    this.state = 1494;
                    this.column_name();
                    }
                    break;
                case SQLiteParser.OPEN_PAR:
                    {
                    this.state = 1495;
                    this.column_name_list();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1498;
                this.match(SQLiteParser.ASSIGN);
                this.state = 1499;
                this.expr();
                }
                }
                this.state = 1505;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1508;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 85) {
                {
                this.state = 1506;
                this.match(SQLiteParser.FROM_);
                this.state = 1507;
                this.join_clause();
                }
            }

            this.state = 1512;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 175) {
                {
                this.state = 1510;
                this.match(SQLiteParser.WHERE_);
                this.state = 1511;
                this.expr();
                }
            }

            this.state = 1515;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 1514;
                this.returning_clause();
                }
            }

            this.state = 1518;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 125) {
                {
                this.state = 1517;
                this.order_clause();
                }
            }

            this.state = 1521;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 111) {
                {
                this.state = 1520;
                this.limit_clause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public column_name_list(): Column_name_listContext {
        let localContext = new Column_name_listContext(this.context, this.state);
        this.enterRule(localContext, 130, SQLiteParser.RULE_column_name_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1523;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 1524;
            this.column_name();
            this.state = 1529;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1525;
                this.match(SQLiteParser.COMMA);
                this.state = 1526;
                this.column_name();
                }
                }
                this.state = 1531;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1532;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualified_table_name(): Qualified_table_nameContext {
        let localContext = new Qualified_table_nameContext(this.context, this.state);
        this.enterRule(localContext, 132, SQLiteParser.RULE_qualified_table_name);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1537;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 226, this.context) ) {
            case 1:
                {
                this.state = 1534;
                this.schema_name();
                this.state = 1535;
                this.match(SQLiteParser.DOT);
                }
                break;
            }
            this.state = 1539;
            this.table_name();
            this.state = 1542;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 36) {
                {
                this.state = 1540;
                this.match(SQLiteParser.AS_);
                this.state = 1541;
                this.alias();
                }
            }

            this.state = 1549;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.INDEXED_:
                {
                this.state = 1544;
                this.match(SQLiteParser.INDEXED_);
                this.state = 1545;
                this.match(SQLiteParser.BY_);
                this.state = 1546;
                this.index_name();
                }
                break;
            case SQLiteParser.NOT_:
                {
                this.state = 1547;
                this.match(SQLiteParser.NOT_);
                this.state = 1548;
                this.match(SQLiteParser.INDEXED_);
                }
                break;
            case SQLiteParser.EOF:
            case SQLiteParser.SCOL:
            case SQLiteParser.LIMIT_:
            case SQLiteParser.ORDER_:
            case SQLiteParser.RETURNING_:
            case SQLiteParser.SET_:
            case SQLiteParser.WHERE_:
                break;
            default:
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public vacuum_stmt(): Vacuum_stmtContext {
        let localContext = new Vacuum_stmtContext(this.context, this.state);
        this.enterRule(localContext, 134, SQLiteParser.RULE_vacuum_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1551;
            this.match(SQLiteParser.VACUUM_);
            this.state = 1553;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 4182469835) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 3118323049) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 1895270119) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 3019370363) !== 0) || ((((_la - 158)) & ~0x1F) === 0 && ((1 << (_la - 158)) & 41472485) !== 0)) {
                {
                this.state = 1552;
                this.schema_name();
                }
            }

            this.state = 1557;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 103) {
                {
                this.state = 1555;
                this.match(SQLiteParser.INTO_);
                this.state = 1556;
                this.filename();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public filter_clause(): Filter_clauseContext {
        let localContext = new Filter_clauseContext(this.context, this.state);
        this.enterRule(localContext, 136, SQLiteParser.RULE_filter_clause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1559;
            this.match(SQLiteParser.FILTER_);
            this.state = 1560;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 1561;
            this.match(SQLiteParser.WHERE_);
            this.state = 1562;
            this.expr();
            this.state = 1563;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public window_defn(): Window_defnContext {
        let localContext = new Window_defnContext(this.context, this.state);
        this.enterRule(localContext, 138, SQLiteParser.RULE_window_defn);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1565;
            this.match(SQLiteParser.OPEN_PAR);
            this.state = 1567;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 231, this.context) ) {
            case 1:
                {
                this.state = 1566;
                this.base_window_name();
                }
                break;
            }
            this.state = 1579;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 129) {
                {
                this.state = 1569;
                this.match(SQLiteParser.PARTITION_);
                this.state = 1570;
                this.match(SQLiteParser.BY_);
                this.state = 1571;
                this.expr();
                this.state = 1576;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                    {
                    this.state = 1572;
                    this.match(SQLiteParser.COMMA);
                    this.state = 1573;
                    this.expr();
                    }
                    }
                    this.state = 1578;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1582;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 125) {
                {
                this.state = 1581;
                this.order_clause();
                }
            }

            this.state = 1585;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 90 || _la === 136 || _la === 150) {
                {
                this.state = 1584;
                this.frame_spec();
                }
            }

            this.state = 1587;
            this.match(SQLiteParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public over_clause(): Over_clauseContext {
        let localContext = new Over_clauseContext(this.context, this.state);
        this.enterRule(localContext, 140, SQLiteParser.RULE_over_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1589;
            this.match(SQLiteParser.OVER_);
            this.state = 1614;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CROSS_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DO_:
            case SQLiteParser.EACH_:
            case SQLiteParser.END_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUDE_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.FOR_:
            case SQLiteParser.FULL_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.INDEXED_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INNER_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LAST_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.MATERIALIZED_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.NO_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.OTHERS_:
            case SQLiteParser.OUTER_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RAISE_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.RIGHT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWID_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.STORED_:
            case SQLiteParser.STRICT_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.TIES_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.UNION_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHIN_:
            case SQLiteParser.WITHOUT_:
            case SQLiteParser.IDENTIFIER:
            case SQLiteParser.STRING_LITERAL:
                {
                this.state = 1590;
                this.window_name();
                }
                break;
            case SQLiteParser.OPEN_PAR:
                {
                this.state = 1591;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1593;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 236, this.context) ) {
                case 1:
                    {
                    this.state = 1592;
                    this.base_window_name();
                    }
                    break;
                }
                this.state = 1605;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 129) {
                    {
                    this.state = 1595;
                    this.match(SQLiteParser.PARTITION_);
                    this.state = 1596;
                    this.match(SQLiteParser.BY_);
                    this.state = 1597;
                    this.expr();
                    this.state = 1602;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 5) {
                        {
                        {
                        this.state = 1598;
                        this.match(SQLiteParser.COMMA);
                        this.state = 1599;
                        this.expr();
                        }
                        }
                        this.state = 1604;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1608;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 125) {
                    {
                    this.state = 1607;
                    this.order_clause();
                    }
                }

                this.state = 1611;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 90 || _la === 136 || _la === 150) {
                    {
                    this.state = 1610;
                    this.frame_spec();
                    }
                }

                this.state = 1613;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frame_spec(): Frame_specContext {
        let localContext = new Frame_specContext(this.context, this.state);
        this.enterRule(localContext, 142, SQLiteParser.RULE_frame_spec);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1616;
            this.frame_clause();
            this.state = 1626;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 74) {
                {
                this.state = 1617;
                this.match(SQLiteParser.EXCLUDE_);
                this.state = 1624;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SQLiteParser.NO_:
                    {
                    this.state = 1618;
                    this.match(SQLiteParser.NO_);
                    this.state = 1619;
                    this.match(SQLiteParser.OTHERS_);
                    }
                    break;
                case SQLiteParser.CURRENT_:
                    {
                    this.state = 1620;
                    this.match(SQLiteParser.CURRENT_);
                    this.state = 1621;
                    this.match(SQLiteParser.ROW_);
                    }
                    break;
                case SQLiteParser.GROUP_:
                    {
                    this.state = 1622;
                    this.match(SQLiteParser.GROUP_);
                    }
                    break;
                case SQLiteParser.TIES_:
                    {
                    this.state = 1623;
                    this.match(SQLiteParser.TIES_);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frame_clause(): Frame_clauseContext {
        let localContext = new Frame_clauseContext(this.context, this.state);
        this.enterRule(localContext, 144, SQLiteParser.RULE_frame_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1628;
            _la = this.tokenStream.LA(1);
            if(!(_la === 90 || _la === 136 || _la === 150)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1635;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.OPEN_PAR:
            case SQLiteParser.PLUS:
            case SQLiteParser.MINUS:
            case SQLiteParser.TILDE:
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CASE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CROSS_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DO_:
            case SQLiteParser.EACH_:
            case SQLiteParser.END_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUDE_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXISTS_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.FOR_:
            case SQLiteParser.FULL_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.INDEXED_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INNER_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LAST_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.MATERIALIZED_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.NO_:
            case SQLiteParser.NOT_:
            case SQLiteParser.NULL_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.OTHERS_:
            case SQLiteParser.OUTER_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RAISE_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.RIGHT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWID_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.STORED_:
            case SQLiteParser.STRICT_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.TIES_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.UNION_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHIN_:
            case SQLiteParser.WITHOUT_:
            case SQLiteParser.IDENTIFIER:
            case SQLiteParser.NUMERIC_LITERAL:
            case SQLiteParser.BIND_PARAMETER:
            case SQLiteParser.STRING_LITERAL:
            case SQLiteParser.BLOB_LITERAL:
                {
                this.state = 1629;
                this.frame_single();
                }
                break;
            case SQLiteParser.BETWEEN_:
                {
                this.state = 1630;
                this.match(SQLiteParser.BETWEEN_);
                this.state = 1631;
                this.frame_left();
                this.state = 1632;
                this.match(SQLiteParser.AND_);
                this.state = 1633;
                this.frame_right();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public order_clause(): Order_clauseContext {
        let localContext = new Order_clauseContext(this.context, this.state);
        this.enterRule(localContext, 146, SQLiteParser.RULE_order_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1637;
            this.match(SQLiteParser.ORDER_);
            this.state = 1638;
            this.match(SQLiteParser.BY_);
            this.state = 1639;
            this.ordering_term();
            this.state = 1644;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 1640;
                this.match(SQLiteParser.COMMA);
                this.state = 1641;
                this.ordering_term();
                }
                }
                this.state = 1646;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public limit_clause(): Limit_clauseContext {
        let localContext = new Limit_clauseContext(this.context, this.state);
        this.enterRule(localContext, 148, SQLiteParser.RULE_limit_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1647;
            this.match(SQLiteParser.LIMIT_);
            this.state = 1648;
            this.expr();
            this.state = 1651;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5 || _la === 122) {
                {
                this.state = 1649;
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 122)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1650;
                this.expr();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ordering_term(): Ordering_termContext {
        let localContext = new Ordering_termContext(this.context, this.state);
        this.enterRule(localContext, 150, SQLiteParser.RULE_ordering_term);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1653;
            this.expr();
            this.state = 1656;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 1654;
                this.match(SQLiteParser.COLLATE_);
                this.state = 1655;
                this.collation_name();
                }
            }

            this.state = 1659;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37 || _la === 64) {
                {
                this.state = 1658;
                this.asc_desc();
                }
            }

            this.state = 1663;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 120) {
                {
                this.state = 1661;
                this.match(SQLiteParser.NULLS_);
                this.state = 1662;
                _la = this.tokenStream.LA(1);
                if(!(_la === 81 || _la === 108)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public asc_desc(): Asc_descContext {
        let localContext = new Asc_descContext(this.context, this.state);
        this.enterRule(localContext, 152, SQLiteParser.RULE_asc_desc);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1665;
            _la = this.tokenStream.LA(1);
            if(!(_la === 37 || _la === 64)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frame_left(): Frame_leftContext {
        let localContext = new Frame_leftContext(this.context, this.state);
        this.enterRule(localContext, 154, SQLiteParser.RULE_frame_left);
        try {
            this.state = 1675;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 250, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1667;
                this.expr();
                this.state = 1668;
                this.match(SQLiteParser.PRECEDING_);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1670;
                this.expr();
                this.state = 1671;
                this.match(SQLiteParser.FOLLOWING_);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1673;
                this.match(SQLiteParser.CURRENT_);
                this.state = 1674;
                this.match(SQLiteParser.ROW_);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frame_right(): Frame_rightContext {
        let localContext = new Frame_rightContext(this.context, this.state);
        this.enterRule(localContext, 156, SQLiteParser.RULE_frame_right);
        try {
            this.state = 1685;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 251, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1677;
                this.expr();
                this.state = 1678;
                this.match(SQLiteParser.PRECEDING_);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1680;
                this.expr();
                this.state = 1681;
                this.match(SQLiteParser.FOLLOWING_);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1683;
                this.match(SQLiteParser.CURRENT_);
                this.state = 1684;
                this.match(SQLiteParser.ROW_);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frame_single(): Frame_singleContext {
        let localContext = new Frame_singleContext(this.context, this.state);
        this.enterRule(localContext, 158, SQLiteParser.RULE_frame_single);
        try {
            this.state = 1692;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 252, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1687;
                this.expr();
                this.state = 1688;
                this.match(SQLiteParser.PRECEDING_);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1690;
                this.match(SQLiteParser.CURRENT_);
                this.state = 1691;
                this.match(SQLiteParser.ROW_);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public error_message(): Error_messageContext {
        let localContext = new Error_messageContext(this.context, this.state);
        this.enterRule(localContext, 160, SQLiteParser.RULE_error_message);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1694;
            this.expr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public filename(): FilenameContext {
        let localContext = new FilenameContext(this.context, this.state);
        this.enterRule(localContext, 162, SQLiteParser.RULE_filename);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1696;
            this.expr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public module_argument(): Module_argumentContext {
        let localContext = new Module_argumentContext(this.context, this.state);
        this.enterRule(localContext, 164, SQLiteParser.RULE_module_argument);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1701;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967246) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 268435455) !== 0)) {
                {
                {
                this.state = 1698;
                this.module_argument_outer();
                }
                }
                this.state = 1703;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public module_argument_outer(): Module_argument_outerContext {
        let localContext = new Module_argument_outerContext(this.context, this.state);
        this.enterRule(localContext, 166, SQLiteParser.RULE_module_argument_outer);
        let _la: number;
        try {
            this.state = 1713;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.SCOL:
            case SQLiteParser.DOT:
            case SQLiteParser.ASSIGN:
            case SQLiteParser.STAR:
            case SQLiteParser.PLUS:
            case SQLiteParser.MINUS:
            case SQLiteParser.TILDE:
            case SQLiteParser.PIPE2:
            case SQLiteParser.DIV:
            case SQLiteParser.MOD:
            case SQLiteParser.LT2:
            case SQLiteParser.GT2:
            case SQLiteParser.AMP:
            case SQLiteParser.PIPE:
            case SQLiteParser.LT:
            case SQLiteParser.LT_EQ:
            case SQLiteParser.GT:
            case SQLiteParser.GT_EQ:
            case SQLiteParser.EQ:
            case SQLiteParser.NOT_EQ1:
            case SQLiteParser.NOT_EQ2:
            case SQLiteParser.JPTR:
            case SQLiteParser.JPTR2:
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.ADD_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALL_:
            case SQLiteParser.ALTER_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.AND_:
            case SQLiteParser.AS_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.AUTOINCREMENT_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BETWEEN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CASE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.CHECK_:
            case SQLiteParser.COLLATE_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.COMMIT_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CONSTRAINT_:
            case SQLiteParser.CREATE_:
            case SQLiteParser.CROSS_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFAULT_:
            case SQLiteParser.DEFERRABLE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DELETE_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DISTINCT_:
            case SQLiteParser.DO_:
            case SQLiteParser.DROP_:
            case SQLiteParser.EACH_:
            case SQLiteParser.ELSE_:
            case SQLiteParser.END_:
            case SQLiteParser.ESCAPE_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUDE_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXISTS_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.FILTER_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.FOR_:
            case SQLiteParser.FOREIGN_:
            case SQLiteParser.FROM_:
            case SQLiteParser.FULL_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUP_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.HAVING_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.IN_:
            case SQLiteParser.INDEX_:
            case SQLiteParser.INDEXED_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INNER_:
            case SQLiteParser.INSERT_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.INTO_:
            case SQLiteParser.IS_:
            case SQLiteParser.ISNULL_:
            case SQLiteParser.JOIN_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LAST_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.LIMIT_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.MATERIALIZED_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.NO_:
            case SQLiteParser.NOT_:
            case SQLiteParser.NOTHING_:
            case SQLiteParser.NOTNULL_:
            case SQLiteParser.NULL_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.ON_:
            case SQLiteParser.OR_:
            case SQLiteParser.ORDER_:
            case SQLiteParser.OTHERS_:
            case SQLiteParser.OUTER_:
            case SQLiteParser.OVER_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.PRIMARY_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RAISE_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REFERENCES_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.RETURNING_:
            case SQLiteParser.RIGHT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWID_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.SELECT_:
            case SQLiteParser.SET_:
            case SQLiteParser.STORED_:
            case SQLiteParser.STRICT_:
            case SQLiteParser.TABLE_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.THEN_:
            case SQLiteParser.TIES_:
            case SQLiteParser.TO_:
            case SQLiteParser.TRANSACTION_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.UNION_:
            case SQLiteParser.UNIQUE_:
            case SQLiteParser.UPDATE_:
            case SQLiteParser.USING_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VALUES_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WHEN_:
            case SQLiteParser.WHERE_:
            case SQLiteParser.WINDOW_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHIN_:
            case SQLiteParser.WITHOUT_:
            case SQLiteParser.IDENTIFIER:
            case SQLiteParser.NUMERIC_LITERAL:
            case SQLiteParser.BIND_PARAMETER:
            case SQLiteParser.STRING_LITERAL:
            case SQLiteParser.BLOB_LITERAL:
            case SQLiteParser.SINGLE_LINE_COMMENT:
            case SQLiteParser.MULTILINE_COMMENT:
            case SQLiteParser.SPACES:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1704;
                _la = this.tokenStream.LA(1);
                if(_la<=0 || (((_la) & ~0x1F) === 0 && ((1 << _la) & 56) !== 0) || _la === 188) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case SQLiteParser.OPEN_PAR:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1705;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1709;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967278) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 268435455) !== 0)) {
                    {
                    {
                    this.state = 1706;
                    this.module_argument_inner();
                    }
                    }
                    this.state = 1711;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1712;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public module_argument_inner(): Module_argument_innerContext {
        let localContext = new Module_argument_innerContext(this.context, this.state);
        this.enterRule(localContext, 168, SQLiteParser.RULE_module_argument_inner);
        let _la: number;
        try {
            this.state = 1724;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.SCOL:
            case SQLiteParser.DOT:
            case SQLiteParser.COMMA:
            case SQLiteParser.ASSIGN:
            case SQLiteParser.STAR:
            case SQLiteParser.PLUS:
            case SQLiteParser.MINUS:
            case SQLiteParser.TILDE:
            case SQLiteParser.PIPE2:
            case SQLiteParser.DIV:
            case SQLiteParser.MOD:
            case SQLiteParser.LT2:
            case SQLiteParser.GT2:
            case SQLiteParser.AMP:
            case SQLiteParser.PIPE:
            case SQLiteParser.LT:
            case SQLiteParser.LT_EQ:
            case SQLiteParser.GT:
            case SQLiteParser.GT_EQ:
            case SQLiteParser.EQ:
            case SQLiteParser.NOT_EQ1:
            case SQLiteParser.NOT_EQ2:
            case SQLiteParser.JPTR:
            case SQLiteParser.JPTR2:
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.ADD_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALL_:
            case SQLiteParser.ALTER_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.AND_:
            case SQLiteParser.AS_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.AUTOINCREMENT_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BETWEEN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CASE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.CHECK_:
            case SQLiteParser.COLLATE_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.COMMIT_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CONSTRAINT_:
            case SQLiteParser.CREATE_:
            case SQLiteParser.CROSS_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFAULT_:
            case SQLiteParser.DEFERRABLE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DELETE_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DISTINCT_:
            case SQLiteParser.DO_:
            case SQLiteParser.DROP_:
            case SQLiteParser.EACH_:
            case SQLiteParser.ELSE_:
            case SQLiteParser.END_:
            case SQLiteParser.ESCAPE_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUDE_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXISTS_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.FILTER_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.FOR_:
            case SQLiteParser.FOREIGN_:
            case SQLiteParser.FROM_:
            case SQLiteParser.FULL_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUP_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.HAVING_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.IN_:
            case SQLiteParser.INDEX_:
            case SQLiteParser.INDEXED_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INNER_:
            case SQLiteParser.INSERT_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.INTO_:
            case SQLiteParser.IS_:
            case SQLiteParser.ISNULL_:
            case SQLiteParser.JOIN_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LAST_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.LIMIT_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.MATERIALIZED_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.NO_:
            case SQLiteParser.NOT_:
            case SQLiteParser.NOTHING_:
            case SQLiteParser.NOTNULL_:
            case SQLiteParser.NULL_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.ON_:
            case SQLiteParser.OR_:
            case SQLiteParser.ORDER_:
            case SQLiteParser.OTHERS_:
            case SQLiteParser.OUTER_:
            case SQLiteParser.OVER_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.PRIMARY_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RAISE_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REFERENCES_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.RETURNING_:
            case SQLiteParser.RIGHT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWID_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.SELECT_:
            case SQLiteParser.SET_:
            case SQLiteParser.STORED_:
            case SQLiteParser.STRICT_:
            case SQLiteParser.TABLE_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.THEN_:
            case SQLiteParser.TIES_:
            case SQLiteParser.TO_:
            case SQLiteParser.TRANSACTION_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.UNION_:
            case SQLiteParser.UNIQUE_:
            case SQLiteParser.UPDATE_:
            case SQLiteParser.USING_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VALUES_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WHEN_:
            case SQLiteParser.WHERE_:
            case SQLiteParser.WINDOW_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHIN_:
            case SQLiteParser.WITHOUT_:
            case SQLiteParser.IDENTIFIER:
            case SQLiteParser.NUMERIC_LITERAL:
            case SQLiteParser.BIND_PARAMETER:
            case SQLiteParser.STRING_LITERAL:
            case SQLiteParser.BLOB_LITERAL:
            case SQLiteParser.SINGLE_LINE_COMMENT:
            case SQLiteParser.MULTILINE_COMMENT:
            case SQLiteParser.SPACES:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1715;
                _la = this.tokenStream.LA(1);
                if(_la<=0 || _la === 3 || _la === 4 || _la === 188) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case SQLiteParser.OPEN_PAR:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1716;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1720;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967278) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 268435455) !== 0)) {
                    {
                    {
                    this.state = 1717;
                    this.module_argument_inner();
                    }
                    }
                    this.state = 1722;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1723;
                this.match(SQLiteParser.CLOSE_PAR);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fallback_excluding_conflicts(): Fallback_excluding_conflictsContext {
        let localContext = new Fallback_excluding_conflictsContext(this.context, this.state);
        this.enterRule(localContext, 170, SQLiteParser.RULE_fallback_excluding_conflicts);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1726;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 4048252107) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 2984105321) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 1890944583) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 3018321273) !== 0) || ((((_la - 158)) & ~0x1F) === 0 && ((1 << (_la - 158)) & 3723749) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public join_keyword(): Join_keywordContext {
        let localContext = new Join_keywordContext(this.context, this.state);
        this.enterRule(localContext, 172, SQLiteParser.RULE_join_keyword);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1728;
            _la = this.tokenStream.LA(1);
            if(!(_la === 54 || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 276834305) !== 0) || _la === 127 || _la === 146)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fallback(): FallbackContext {
        let localContext = new FallbackContext(this.context, this.state);
        this.enterRule(localContext, 174, SQLiteParser.RULE_fallback);
        try {
            this.state = 1733;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DO_:
            case SQLiteParser.EACH_:
            case SQLiteParser.END_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUDE_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.FOR_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LAST_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.MATERIALIZED_:
            case SQLiteParser.NO_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.OTHERS_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWID_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.STORED_:
            case SQLiteParser.STRICT_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.TIES_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.UNION_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHIN_:
            case SQLiteParser.WITHOUT_:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1730;
                this.fallback_excluding_conflicts();
                }
                break;
            case SQLiteParser.CROSS_:
            case SQLiteParser.FULL_:
            case SQLiteParser.INDEXED_:
            case SQLiteParser.INNER_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.OUTER_:
            case SQLiteParser.RIGHT_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1731;
                this.join_keyword();
                }
                break;
            case SQLiteParser.RAISE_:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1732;
                this.match(SQLiteParser.RAISE_);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public name(): NameContext {
        let localContext = new NameContext(this.context, this.state);
        this.enterRule(localContext, 176, SQLiteParser.RULE_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1735;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public function_name(): Function_nameContext {
        let localContext = new Function_nameContext(this.context, this.state);
        this.enterRule(localContext, 178, SQLiteParser.RULE_function_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1737;
            this.any_name_excluding_raise();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public schema_name(): Schema_nameContext {
        let localContext = new Schema_nameContext(this.context, this.state);
        this.enterRule(localContext, 180, SQLiteParser.RULE_schema_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1739;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public table_name(): Table_nameContext {
        let localContext = new Table_nameContext(this.context, this.state);
        this.enterRule(localContext, 182, SQLiteParser.RULE_table_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1741;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public table_or_index_name(): Table_or_index_nameContext {
        let localContext = new Table_or_index_nameContext(this.context, this.state);
        this.enterRule(localContext, 184, SQLiteParser.RULE_table_or_index_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1743;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public column_name(): Column_nameContext {
        let localContext = new Column_nameContext(this.context, this.state);
        this.enterRule(localContext, 186, SQLiteParser.RULE_column_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1745;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public column_name_excluding_string(): Column_name_excluding_stringContext {
        let localContext = new Column_name_excluding_stringContext(this.context, this.state);
        this.enterRule(localContext, 188, SQLiteParser.RULE_column_name_excluding_string);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1747;
            this.any_name_excluding_string();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public column_alias(): Column_aliasContext {
        let localContext = new Column_aliasContext(this.context, this.state);
        this.enterRule(localContext, 190, SQLiteParser.RULE_column_alias);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1749;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public collation_name(): Collation_nameContext {
        let localContext = new Collation_nameContext(this.context, this.state);
        this.enterRule(localContext, 192, SQLiteParser.RULE_collation_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1751;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public foreign_table(): Foreign_tableContext {
        let localContext = new Foreign_tableContext(this.context, this.state);
        this.enterRule(localContext, 194, SQLiteParser.RULE_foreign_table);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1753;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public index_name(): Index_nameContext {
        let localContext = new Index_nameContext(this.context, this.state);
        this.enterRule(localContext, 196, SQLiteParser.RULE_index_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1755;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public trigger_name(): Trigger_nameContext {
        let localContext = new Trigger_nameContext(this.context, this.state);
        this.enterRule(localContext, 198, SQLiteParser.RULE_trigger_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1757;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public view_name(): View_nameContext {
        let localContext = new View_nameContext(this.context, this.state);
        this.enterRule(localContext, 200, SQLiteParser.RULE_view_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1759;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public module_name(): Module_nameContext {
        let localContext = new Module_nameContext(this.context, this.state);
        this.enterRule(localContext, 202, SQLiteParser.RULE_module_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1761;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pragma_name(): Pragma_nameContext {
        let localContext = new Pragma_nameContext(this.context, this.state);
        this.enterRule(localContext, 204, SQLiteParser.RULE_pragma_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1763;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public savepoint_name(): Savepoint_nameContext {
        let localContext = new Savepoint_nameContext(this.context, this.state);
        this.enterRule(localContext, 206, SQLiteParser.RULE_savepoint_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1765;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public table_alias(): Table_aliasContext {
        let localContext = new Table_aliasContext(this.context, this.state);
        this.enterRule(localContext, 208, SQLiteParser.RULE_table_alias);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1767;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public table_alias_excluding_joins(): Table_alias_excluding_joinsContext {
        let localContext = new Table_alias_excluding_joinsContext(this.context, this.state);
        this.enterRule(localContext, 210, SQLiteParser.RULE_table_alias_excluding_joins);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1769;
            this.any_name_excluding_joins();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public window_name(): Window_nameContext {
        let localContext = new Window_nameContext(this.context, this.state);
        this.enterRule(localContext, 212, SQLiteParser.RULE_window_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1771;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alias(): AliasContext {
        let localContext = new AliasContext(this.context, this.state);
        this.enterRule(localContext, 214, SQLiteParser.RULE_alias);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1773;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public base_window_name(): Base_window_nameContext {
        let localContext = new Base_window_nameContext(this.context, this.state);
        this.enterRule(localContext, 216, SQLiteParser.RULE_base_window_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1775;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public table_function_name(): Table_function_nameContext {
        let localContext = new Table_function_nameContext(this.context, this.state);
        this.enterRule(localContext, 218, SQLiteParser.RULE_table_function_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1777;
            this.any_name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public any_name_excluding_raise(): Any_name_excluding_raiseContext {
        let localContext = new Any_name_excluding_raiseContext(this.context, this.state);
        this.enterRule(localContext, 220, SQLiteParser.RULE_any_name_excluding_raise);
        try {
            this.state = 1783;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1779;
                this.match(SQLiteParser.IDENTIFIER);
                }
                break;
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DO_:
            case SQLiteParser.EACH_:
            case SQLiteParser.END_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUDE_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.FOR_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LAST_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.MATERIALIZED_:
            case SQLiteParser.NO_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.OTHERS_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWID_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.STORED_:
            case SQLiteParser.STRICT_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.TIES_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.UNION_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHIN_:
            case SQLiteParser.WITHOUT_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1780;
                this.fallback_excluding_conflicts();
                }
                break;
            case SQLiteParser.CROSS_:
            case SQLiteParser.FULL_:
            case SQLiteParser.INDEXED_:
            case SQLiteParser.INNER_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.OUTER_:
            case SQLiteParser.RIGHT_:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1781;
                this.join_keyword();
                }
                break;
            case SQLiteParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1782;
                this.match(SQLiteParser.STRING_LITERAL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public any_name_excluding_joins(): Any_name_excluding_joinsContext {
        let localContext = new Any_name_excluding_joinsContext(this.context, this.state);
        this.enterRule(localContext, 222, SQLiteParser.RULE_any_name_excluding_joins);
        try {
            this.state = 1789;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1785;
                this.match(SQLiteParser.IDENTIFIER);
                }
                break;
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DO_:
            case SQLiteParser.EACH_:
            case SQLiteParser.END_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUDE_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.FOR_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LAST_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.MATERIALIZED_:
            case SQLiteParser.NO_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.OTHERS_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWID_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.STORED_:
            case SQLiteParser.STRICT_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.TIES_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.UNION_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHIN_:
            case SQLiteParser.WITHOUT_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1786;
                this.fallback_excluding_conflicts();
                }
                break;
            case SQLiteParser.RAISE_:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1787;
                this.match(SQLiteParser.RAISE_);
                }
                break;
            case SQLiteParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1788;
                this.match(SQLiteParser.STRING_LITERAL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public any_name_excluding_string(): Any_name_excluding_stringContext {
        let localContext = new Any_name_excluding_stringContext(this.context, this.state);
        this.enterRule(localContext, 224, SQLiteParser.RULE_any_name_excluding_string);
        try {
            this.state = 1793;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1791;
                this.match(SQLiteParser.IDENTIFIER);
                }
                break;
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CROSS_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DO_:
            case SQLiteParser.EACH_:
            case SQLiteParser.END_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUDE_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.FOR_:
            case SQLiteParser.FULL_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.INDEXED_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INNER_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LAST_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.MATERIALIZED_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.NO_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.OTHERS_:
            case SQLiteParser.OUTER_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RAISE_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.RIGHT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWID_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.STORED_:
            case SQLiteParser.STRICT_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.TIES_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.UNION_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHIN_:
            case SQLiteParser.WITHOUT_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1792;
                this.fallback();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public any_name(): Any_nameContext {
        let localContext = new Any_nameContext(this.context, this.state);
        this.enterRule(localContext, 226, SQLiteParser.RULE_any_name);
        try {
            this.state = 1798;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SQLiteParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1795;
                this.match(SQLiteParser.IDENTIFIER);
                }
                break;
            case SQLiteParser.ABORT_:
            case SQLiteParser.ACTION_:
            case SQLiteParser.AFTER_:
            case SQLiteParser.ALWAYS_:
            case SQLiteParser.ANALYZE_:
            case SQLiteParser.ASC_:
            case SQLiteParser.ATTACH_:
            case SQLiteParser.BEFORE_:
            case SQLiteParser.BEGIN_:
            case SQLiteParser.BY_:
            case SQLiteParser.CASCADE_:
            case SQLiteParser.CAST_:
            case SQLiteParser.COLUMN_:
            case SQLiteParser.CONFLICT_:
            case SQLiteParser.CROSS_:
            case SQLiteParser.CURRENT_:
            case SQLiteParser.CURRENT_DATE_:
            case SQLiteParser.CURRENT_TIME_:
            case SQLiteParser.CURRENT_TIMESTAMP_:
            case SQLiteParser.DATABASE_:
            case SQLiteParser.DEFERRED_:
            case SQLiteParser.DESC_:
            case SQLiteParser.DETACH_:
            case SQLiteParser.DO_:
            case SQLiteParser.EACH_:
            case SQLiteParser.END_:
            case SQLiteParser.EXCEPT_:
            case SQLiteParser.EXCLUDE_:
            case SQLiteParser.EXCLUSIVE_:
            case SQLiteParser.EXPLAIN_:
            case SQLiteParser.FAIL_:
            case SQLiteParser.FALSE_:
            case SQLiteParser.FIRST_:
            case SQLiteParser.FOLLOWING_:
            case SQLiteParser.FOR_:
            case SQLiteParser.FULL_:
            case SQLiteParser.GENERATED_:
            case SQLiteParser.GLOB_:
            case SQLiteParser.GROUPS_:
            case SQLiteParser.IF_:
            case SQLiteParser.IGNORE_:
            case SQLiteParser.IMMEDIATE_:
            case SQLiteParser.INDEXED_:
            case SQLiteParser.INITIALLY_:
            case SQLiteParser.INNER_:
            case SQLiteParser.INSTEAD_:
            case SQLiteParser.INTERSECT_:
            case SQLiteParser.KEY_:
            case SQLiteParser.LAST_:
            case SQLiteParser.LEFT_:
            case SQLiteParser.LIKE_:
            case SQLiteParser.MATCH_:
            case SQLiteParser.MATERIALIZED_:
            case SQLiteParser.NATURAL_:
            case SQLiteParser.NO_:
            case SQLiteParser.NULLS_:
            case SQLiteParser.OF_:
            case SQLiteParser.OFFSET_:
            case SQLiteParser.OTHERS_:
            case SQLiteParser.OUTER_:
            case SQLiteParser.PARTITION_:
            case SQLiteParser.PLAN_:
            case SQLiteParser.PRAGMA_:
            case SQLiteParser.PRECEDING_:
            case SQLiteParser.QUERY_:
            case SQLiteParser.RAISE_:
            case SQLiteParser.RANGE_:
            case SQLiteParser.RECURSIVE_:
            case SQLiteParser.REGEXP_:
            case SQLiteParser.REINDEX_:
            case SQLiteParser.RELEASE_:
            case SQLiteParser.RENAME_:
            case SQLiteParser.REPLACE_:
            case SQLiteParser.RESTRICT_:
            case SQLiteParser.RIGHT_:
            case SQLiteParser.ROLLBACK_:
            case SQLiteParser.ROW_:
            case SQLiteParser.ROWID_:
            case SQLiteParser.ROWS_:
            case SQLiteParser.SAVEPOINT_:
            case SQLiteParser.STORED_:
            case SQLiteParser.STRICT_:
            case SQLiteParser.TEMP_:
            case SQLiteParser.TEMPORARY_:
            case SQLiteParser.TIES_:
            case SQLiteParser.TRIGGER_:
            case SQLiteParser.TRUE_:
            case SQLiteParser.UNBOUNDED_:
            case SQLiteParser.UNION_:
            case SQLiteParser.VACUUM_:
            case SQLiteParser.VIEW_:
            case SQLiteParser.VIRTUAL_:
            case SQLiteParser.WITH_:
            case SQLiteParser.WITHIN_:
            case SQLiteParser.WITHOUT_:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1796;
                this.fallback();
                }
                break;
            case SQLiteParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1797;
                this.match(SQLiteParser.STRING_LITERAL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,188,1801,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,1,0,1,0,1,
        0,1,1,3,1,233,8,1,1,1,1,1,3,1,237,8,1,5,1,239,8,1,10,1,12,1,242,
        9,1,1,2,1,2,1,2,3,2,247,8,2,3,2,249,8,2,1,2,1,2,1,2,1,2,1,2,1,2,
        1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
        3,2,273,8,2,1,3,1,3,1,3,1,3,1,3,3,3,280,8,3,1,3,1,3,1,3,1,3,1,3,
        3,3,287,8,3,1,3,1,3,1,3,1,3,3,3,293,8,3,1,3,1,3,3,3,297,8,3,1,3,
        1,3,1,3,3,3,302,8,3,1,3,3,3,305,8,3,1,4,1,4,1,4,1,4,1,4,3,4,312,
        8,4,1,4,3,4,315,8,4,1,5,1,5,3,5,319,8,5,1,5,1,5,1,5,1,5,1,6,1,6,
        3,6,327,8,6,1,6,3,6,330,8,6,1,7,1,7,3,7,334,8,7,1,8,1,8,3,8,338,
        8,8,1,8,1,8,3,8,342,8,8,1,8,3,8,345,8,8,1,9,1,9,1,9,1,10,1,10,3,
        10,352,8,10,1,10,1,10,1,11,1,11,3,11,358,8,11,1,11,1,11,1,11,1,11,
        3,11,364,8,11,1,11,1,11,1,11,3,11,369,8,11,1,11,1,11,1,11,1,11,1,
        11,1,11,1,11,5,11,378,8,11,10,11,12,11,381,9,11,1,11,1,11,1,11,3,
        11,386,8,11,1,12,1,12,1,12,3,12,391,8,12,1,12,3,12,394,8,12,1,13,
        1,13,3,13,398,8,13,1,13,1,13,1,13,1,13,3,13,404,8,13,1,13,1,13,1,
        13,3,13,409,8,13,1,13,1,13,1,13,1,13,1,13,5,13,416,8,13,10,13,12,
        13,419,9,13,1,13,1,13,5,13,423,8,13,10,13,12,13,426,9,13,1,13,1,
        13,3,13,430,8,13,1,13,1,13,3,13,434,8,13,1,14,1,14,1,14,3,14,439,
        8,14,1,14,1,14,1,14,1,14,3,14,445,8,14,5,14,447,8,14,10,14,12,14,
        450,9,14,1,15,1,15,3,15,454,8,15,1,15,5,15,457,8,15,10,15,12,15,
        460,9,15,1,16,4,16,463,8,16,11,16,12,16,464,1,16,1,16,1,16,1,16,
        1,16,1,16,1,16,1,16,1,16,1,16,3,16,477,8,16,1,17,1,17,3,17,481,8,
        17,1,17,1,17,1,17,3,17,486,8,17,1,17,3,17,489,8,17,1,17,3,17,492,
        8,17,1,17,3,17,495,8,17,1,17,1,17,3,17,499,8,17,1,17,3,17,502,8,
        17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,
        17,516,8,17,1,17,1,17,1,17,1,17,1,17,3,17,523,8,17,1,17,1,17,1,17,
        1,17,1,17,3,17,530,8,17,3,17,532,8,17,1,18,3,18,535,8,18,1,18,1,
        18,1,19,1,19,3,19,541,8,19,1,19,1,19,1,19,3,19,546,8,19,1,19,1,19,
        1,19,1,19,5,19,552,8,19,10,19,12,19,555,9,19,1,19,1,19,3,19,559,
        8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,5,19,
        572,8,19,10,19,12,19,575,9,19,1,19,1,19,1,19,3,19,580,8,19,1,20,
        1,20,1,20,1,20,1,20,1,20,5,20,588,8,20,10,20,12,20,591,9,20,1,20,
        1,20,3,20,595,8,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,
        605,8,20,1,20,1,20,5,20,609,8,20,10,20,12,20,612,9,20,1,20,3,20,
        615,8,20,1,20,1,20,1,20,3,20,620,8,20,3,20,622,8,20,1,21,1,21,1,
        21,1,21,1,22,1,22,3,22,630,8,22,1,22,1,22,1,22,1,22,3,22,636,8,22,
        1,22,1,22,1,22,3,22,641,8,22,1,22,1,22,1,22,1,22,1,22,3,22,648,8,
        22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,5,22,657,8,22,10,22,12,22,
        660,9,22,3,22,662,8,22,3,22,664,8,22,1,22,1,22,1,22,1,22,1,22,3,
        22,671,8,22,1,22,1,22,3,22,675,8,22,1,22,1,22,1,22,1,22,1,22,3,22,
        682,8,22,1,22,1,22,4,22,686,8,22,11,22,12,22,687,1,22,1,22,1,23,
        1,23,3,23,694,8,23,1,23,1,23,1,23,1,23,3,23,700,8,23,1,23,1,23,1,
        23,3,23,705,8,23,1,23,1,23,1,23,1,23,1,23,5,23,712,8,23,10,23,12,
        23,715,9,23,1,23,1,23,3,23,719,8,23,1,23,1,23,1,23,1,24,1,24,1,24,
        1,24,1,24,1,24,3,24,730,8,24,1,24,1,24,1,24,3,24,735,8,24,1,24,1,
        24,1,24,1,24,1,24,1,24,1,24,5,24,744,8,24,10,24,12,24,747,9,24,1,
        24,1,24,3,24,751,8,24,1,25,1,25,3,25,755,8,25,1,25,1,25,1,25,5,25,
        760,8,25,10,25,12,25,763,9,25,1,26,1,26,1,26,3,26,768,8,26,1,26,
        3,26,771,8,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,5,27,
        782,8,27,10,27,12,27,785,9,27,1,27,1,27,3,27,789,8,27,1,28,3,28,
        792,8,28,1,28,1,28,1,28,1,28,1,28,3,28,799,8,28,1,28,3,28,802,8,
        28,1,28,3,28,805,8,28,1,28,3,28,808,8,28,1,29,1,29,3,29,812,8,29,
        1,29,1,29,1,30,1,30,1,30,1,30,3,30,820,8,30,1,30,1,30,1,30,3,30,
        825,8,30,1,30,1,30,1,31,1,31,1,32,1,32,1,32,3,32,834,8,32,1,32,1,
        32,1,32,5,32,839,8,32,10,32,12,32,842,9,32,1,32,3,32,845,8,32,1,
        32,3,32,848,8,32,1,32,1,32,3,32,852,8,32,1,32,3,32,855,8,32,1,32,
        3,32,858,8,32,1,32,1,32,1,32,1,32,5,32,864,8,32,10,32,12,32,867,
        9,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,
        880,8,32,1,32,1,32,1,32,1,32,1,32,4,32,887,8,32,11,32,12,32,888,
        1,32,1,32,3,32,893,8,32,1,32,1,32,1,32,3,32,898,8,32,1,33,1,33,1,
        33,5,33,903,8,33,10,33,12,33,906,9,33,1,34,1,34,1,34,5,34,911,8,
        34,10,34,12,34,914,9,34,1,35,5,35,917,8,35,10,35,12,35,920,9,35,
        1,35,1,35,1,36,1,36,1,36,1,36,1,36,3,36,929,8,36,1,36,1,36,3,36,
        933,8,36,1,36,1,36,3,36,937,8,36,1,36,1,36,1,36,1,36,1,36,1,36,3,
        36,945,8,36,1,36,1,36,1,36,1,36,1,36,1,36,5,36,953,8,36,10,36,12,
        36,956,9,36,3,36,958,8,36,1,36,1,36,1,36,1,36,3,36,964,8,36,1,36,
        1,36,1,36,1,36,3,36,970,8,36,1,36,1,36,1,36,1,36,1,36,5,36,977,8,
        36,10,36,12,36,980,9,36,3,36,982,8,36,1,36,1,36,3,36,986,8,36,1,
        36,3,36,989,8,36,1,36,1,36,1,36,1,36,3,36,995,8,36,1,36,1,36,3,36,
        999,8,36,1,36,1,36,1,36,1,36,5,36,1005,8,36,10,36,12,36,1008,9,36,
        1,37,1,37,1,37,5,37,1013,8,37,10,37,12,37,1016,9,37,1,38,1,38,1,
        38,5,38,1021,8,38,10,38,12,38,1024,9,38,1,39,1,39,1,39,5,39,1029,
        8,39,10,39,12,39,1032,9,39,1,40,1,40,1,40,5,40,1037,8,40,10,40,12,
        40,1040,9,40,1,41,1,41,1,41,5,41,1045,8,41,10,41,12,41,1048,9,41,
        1,42,1,42,1,42,5,42,1053,8,42,10,42,12,42,1056,9,42,1,43,5,43,1059,
        8,43,10,43,12,43,1062,9,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,3,
        44,1071,8,44,1,44,1,44,1,44,1,44,1,44,1,44,3,44,1079,8,44,1,44,3,
        44,1082,8,44,1,44,1,44,1,44,1,44,1,44,3,44,1089,8,44,1,45,1,45,1,
        45,1,45,1,45,1,45,3,45,1097,8,45,1,45,1,45,1,46,1,46,1,47,1,47,1,
        47,1,47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,5,48,1115,8,48,10,
        48,12,48,1118,9,48,1,48,1,48,1,49,1,49,1,49,1,49,5,49,1126,8,49,
        10,49,12,49,1129,9,49,1,50,3,50,1132,8,50,1,50,1,50,1,50,1,50,1,
        50,3,50,1139,8,50,1,50,1,50,1,50,1,50,3,50,1145,8,50,1,50,1,50,1,
        50,3,50,1150,8,50,1,50,1,50,1,50,1,50,5,50,1156,8,50,10,50,12,50,
        1159,9,50,1,50,1,50,3,50,1163,8,50,1,50,1,50,5,50,1167,8,50,10,50,
        12,50,1170,9,50,1,50,1,50,3,50,1174,8,50,1,50,3,50,1177,8,50,1,51,
        1,51,1,51,1,51,3,51,1183,8,51,1,51,3,51,1186,8,51,3,51,1188,8,51,
        1,51,1,51,1,51,1,51,3,51,1194,8,51,1,51,3,51,1197,8,51,3,51,1199,
        8,51,5,51,1201,8,51,10,51,12,51,1204,9,51,1,52,1,52,1,52,1,52,1,
        52,1,52,5,52,1212,8,52,10,52,12,52,1215,9,52,1,52,1,52,1,52,3,52,
        1220,8,52,3,52,1222,8,52,1,52,1,52,1,52,1,52,1,52,1,52,3,52,1230,
        8,52,1,52,1,52,1,52,1,52,1,52,3,52,1237,8,52,1,52,1,52,1,52,5,52,
        1242,8,52,10,52,12,52,1245,9,52,1,52,1,52,3,52,1249,8,52,3,52,1251,
        8,52,1,53,1,53,1,53,1,53,3,53,1257,8,53,1,53,1,53,1,53,1,53,1,53,
        1,53,1,53,3,53,1266,8,53,1,54,1,54,1,54,3,54,1271,8,54,1,55,1,55,
        1,55,1,55,1,55,3,55,1278,8,55,1,55,1,55,3,55,1282,8,55,3,55,1284,
        8,55,1,56,3,56,1287,8,56,1,56,1,56,1,56,1,56,5,56,1293,8,56,10,56,
        12,56,1296,9,56,1,56,3,56,1299,8,56,1,56,3,56,1302,8,56,1,57,1,57,
        1,57,1,57,3,57,1308,8,57,5,57,1310,8,57,10,57,12,57,1313,9,57,1,
        58,1,58,3,58,1317,8,58,1,58,1,58,1,58,5,58,1322,8,58,10,58,12,58,
        1325,9,58,1,58,1,58,3,58,1329,8,58,1,58,1,58,3,58,1333,8,58,1,58,
        1,58,1,58,1,58,1,58,5,58,1340,8,58,10,58,12,58,1343,9,58,1,58,1,
        58,3,58,1347,8,58,3,58,1349,8,58,1,58,1,58,1,58,1,58,1,58,1,58,1,
        58,1,58,1,58,5,58,1360,8,58,10,58,12,58,1363,9,58,3,58,1365,8,58,
        1,58,3,58,1368,8,58,1,59,1,59,1,59,3,59,1373,8,59,1,59,1,59,1,59,
        1,59,3,59,1379,8,59,1,59,1,59,1,59,1,59,1,59,3,59,1386,8,59,1,59,
        1,59,1,59,3,59,1391,8,59,1,59,1,59,1,59,1,59,1,59,5,59,1398,8,59,
        10,59,12,59,1401,9,59,1,59,1,59,3,59,1405,8,59,1,59,3,59,1408,8,
        59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,1418,8,59,1,59,3,
        59,1421,8,59,3,59,1423,8,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,3,
        60,1432,8,60,1,60,3,60,1435,8,60,3,60,1437,8,60,1,61,1,61,3,61,1441,
        8,61,1,61,1,61,3,61,1445,8,61,1,61,1,61,3,61,1449,8,61,1,61,3,61,
        1452,8,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,5,62,1461,8,62,10,62,
        12,62,1464,9,62,1,62,1,62,3,62,1468,8,62,1,63,1,63,3,63,1472,8,63,
        1,63,1,63,3,63,1476,8,63,1,64,3,64,1479,8,64,1,64,1,64,1,64,3,64,
        1484,8,64,1,64,1,64,1,64,1,64,3,64,1490,8,64,1,64,1,64,1,64,1,64,
        1,64,3,64,1497,8,64,1,64,1,64,1,64,5,64,1502,8,64,10,64,12,64,1505,
        9,64,1,64,1,64,3,64,1509,8,64,1,64,1,64,3,64,1513,8,64,1,64,3,64,
        1516,8,64,1,64,3,64,1519,8,64,1,64,3,64,1522,8,64,1,65,1,65,1,65,
        1,65,5,65,1528,8,65,10,65,12,65,1531,9,65,1,65,1,65,1,66,1,66,1,
        66,3,66,1538,8,66,1,66,1,66,1,66,3,66,1543,8,66,1,66,1,66,1,66,1,
        66,1,66,3,66,1550,8,66,1,67,1,67,3,67,1554,8,67,1,67,1,67,3,67,1558,
        8,67,1,68,1,68,1,68,1,68,1,68,1,68,1,69,1,69,3,69,1568,8,69,1,69,
        1,69,1,69,1,69,1,69,5,69,1575,8,69,10,69,12,69,1578,9,69,3,69,1580,
        8,69,1,69,3,69,1583,8,69,1,69,3,69,1586,8,69,1,69,1,69,1,70,1,70,
        1,70,1,70,3,70,1594,8,70,1,70,1,70,1,70,1,70,1,70,5,70,1601,8,70,
        10,70,12,70,1604,9,70,3,70,1606,8,70,1,70,3,70,1609,8,70,1,70,3,
        70,1612,8,70,1,70,3,70,1615,8,70,1,71,1,71,1,71,1,71,1,71,1,71,1,
        71,1,71,3,71,1625,8,71,3,71,1627,8,71,1,72,1,72,1,72,1,72,1,72,1,
        72,1,72,3,72,1636,8,72,1,73,1,73,1,73,1,73,1,73,5,73,1643,8,73,10,
        73,12,73,1646,9,73,1,74,1,74,1,74,1,74,3,74,1652,8,74,1,75,1,75,
        1,75,3,75,1657,8,75,1,75,3,75,1660,8,75,1,75,1,75,3,75,1664,8,75,
        1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,3,77,1676,8,77,
        1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,3,78,1686,8,78,1,79,1,79,
        1,79,1,79,1,79,3,79,1693,8,79,1,80,1,80,1,81,1,81,1,82,5,82,1700,
        8,82,10,82,12,82,1703,9,82,1,83,1,83,1,83,5,83,1708,8,83,10,83,12,
        83,1711,9,83,1,83,3,83,1714,8,83,1,84,1,84,1,84,5,84,1719,8,84,10,
        84,12,84,1722,9,84,1,84,3,84,1725,8,84,1,85,1,85,1,86,1,86,1,87,
        1,87,1,87,3,87,1734,8,87,1,88,1,88,1,89,1,89,1,90,1,90,1,91,1,91,
        1,92,1,92,1,93,1,93,1,94,1,94,1,95,1,95,1,96,1,96,1,97,1,97,1,98,
        1,98,1,99,1,99,1,100,1,100,1,101,1,101,1,102,1,102,1,103,1,103,1,
        104,1,104,1,105,1,105,1,106,1,106,1,107,1,107,1,108,1,108,1,109,
        1,109,1,110,1,110,1,110,1,110,3,110,1784,8,110,1,111,1,111,1,111,
        1,111,3,111,1790,8,111,1,112,1,112,3,112,1794,8,112,1,113,1,113,
        1,113,3,113,1799,8,113,1,113,2,417,464,0,114,0,2,4,6,8,10,12,14,
        16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
        60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,
        102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,
        134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,
        166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,
        198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,0,29,
        3,0,62,62,75,75,94,94,2,0,50,50,71,71,1,0,157,158,2,0,154,154,173,
        173,1,0,8,9,2,0,63,63,168,168,2,0,60,60,119,119,2,0,62,62,94,94,
        5,0,27,27,78,78,93,93,143,143,147,147,4,0,96,96,156,156,163,163,
        172,172,2,0,6,6,22,24,3,0,88,88,112,112,139,139,1,0,18,21,1,0,14,
        17,2,0,7,7,12,13,2,0,11,11,25,26,1,0,8,10,3,0,27,27,78,78,147,147,
        6,0,56,58,79,79,119,119,164,164,181,181,183,184,2,0,31,31,66,66,
        3,0,86,86,109,109,146,146,3,0,90,90,136,136,150,150,2,0,5,5,122,
        122,2,0,81,81,108,108,2,0,37,37,64,64,2,0,3,5,188,188,2,0,3,4,188,
        188,41,0,27,28,30,30,33,34,37,38,40,41,43,44,46,46,49,49,51,51,55,
        59,62,62,64,65,67,67,69,69,71,71,73,75,77,79,81,83,87,88,90,90,92,
        94,98,98,101,102,107,108,110,110,112,113,115,115,120,122,126,126,
        129,132,134,134,136,137,139,144,147,151,154,155,157,158,160,160,
        163,166,170,170,172,173,177,179,8,0,54,54,86,86,97,97,99,99,109,
        109,114,114,127,127,146,146,2025,0,228,1,0,0,0,2,232,1,0,0,0,4,248,
        1,0,0,0,6,274,1,0,0,0,8,306,1,0,0,0,10,316,1,0,0,0,12,324,1,0,0,
        0,14,331,1,0,0,0,16,335,1,0,0,0,18,346,1,0,0,0,20,349,1,0,0,0,22,
        355,1,0,0,0,24,387,1,0,0,0,26,395,1,0,0,0,28,438,1,0,0,0,30,451,
        1,0,0,0,32,462,1,0,0,0,34,480,1,0,0,0,36,534,1,0,0,0,38,540,1,0,
        0,0,40,581,1,0,0,0,42,623,1,0,0,0,44,627,1,0,0,0,46,691,1,0,0,0,
        48,723,1,0,0,0,50,752,1,0,0,0,52,764,1,0,0,0,54,776,1,0,0,0,56,791,
        1,0,0,0,58,809,1,0,0,0,60,815,1,0,0,0,62,828,1,0,0,0,64,897,1,0,
        0,0,66,899,1,0,0,0,68,907,1,0,0,0,70,918,1,0,0,0,72,923,1,0,0,0,
        74,1009,1,0,0,0,76,1017,1,0,0,0,78,1025,1,0,0,0,80,1033,1,0,0,0,
        82,1041,1,0,0,0,84,1049,1,0,0,0,86,1060,1,0,0,0,88,1088,1,0,0,0,
        90,1090,1,0,0,0,92,1100,1,0,0,0,94,1102,1,0,0,0,96,1110,1,0,0,0,
        98,1121,1,0,0,0,100,1131,1,0,0,0,102,1178,1,0,0,0,104,1205,1,0,0,
        0,106,1252,1,0,0,0,108,1270,1,0,0,0,110,1272,1,0,0,0,112,1286,1,
        0,0,0,114,1303,1,0,0,0,116,1367,1,0,0,0,118,1422,1,0,0,0,120,1436,
        1,0,0,0,122,1451,1,0,0,0,124,1467,1,0,0,0,126,1475,1,0,0,0,128,1478,
        1,0,0,0,130,1523,1,0,0,0,132,1537,1,0,0,0,134,1551,1,0,0,0,136,1559,
        1,0,0,0,138,1565,1,0,0,0,140,1589,1,0,0,0,142,1616,1,0,0,0,144,1628,
        1,0,0,0,146,1637,1,0,0,0,148,1647,1,0,0,0,150,1653,1,0,0,0,152,1665,
        1,0,0,0,154,1675,1,0,0,0,156,1685,1,0,0,0,158,1692,1,0,0,0,160,1694,
        1,0,0,0,162,1696,1,0,0,0,164,1701,1,0,0,0,166,1713,1,0,0,0,168,1724,
        1,0,0,0,170,1726,1,0,0,0,172,1728,1,0,0,0,174,1733,1,0,0,0,176,1735,
        1,0,0,0,178,1737,1,0,0,0,180,1739,1,0,0,0,182,1741,1,0,0,0,184,1743,
        1,0,0,0,186,1745,1,0,0,0,188,1747,1,0,0,0,190,1749,1,0,0,0,192,1751,
        1,0,0,0,194,1753,1,0,0,0,196,1755,1,0,0,0,198,1757,1,0,0,0,200,1759,
        1,0,0,0,202,1761,1,0,0,0,204,1763,1,0,0,0,206,1765,1,0,0,0,208,1767,
        1,0,0,0,210,1769,1,0,0,0,212,1771,1,0,0,0,214,1773,1,0,0,0,216,1775,
        1,0,0,0,218,1777,1,0,0,0,220,1783,1,0,0,0,222,1789,1,0,0,0,224,1793,
        1,0,0,0,226,1798,1,0,0,0,228,229,3,2,1,0,229,230,5,0,0,1,230,1,1,
        0,0,0,231,233,3,4,2,0,232,231,1,0,0,0,232,233,1,0,0,0,233,240,1,
        0,0,0,234,236,5,1,0,0,235,237,3,4,2,0,236,235,1,0,0,0,236,237,1,
        0,0,0,237,239,1,0,0,0,238,234,1,0,0,0,239,242,1,0,0,0,240,238,1,
        0,0,0,240,241,1,0,0,0,241,3,1,0,0,0,242,240,1,0,0,0,243,246,5,77,
        0,0,244,245,5,134,0,0,245,247,5,130,0,0,246,244,1,0,0,0,246,247,
        1,0,0,0,247,249,1,0,0,0,248,243,1,0,0,0,248,249,1,0,0,0,249,272,
        1,0,0,0,250,273,3,6,3,0,251,273,3,8,4,0,252,273,3,10,5,0,253,273,
        3,12,6,0,254,273,3,14,7,0,255,273,3,22,11,0,256,273,3,26,13,0,257,
        273,3,44,22,0,258,273,3,46,23,0,259,273,3,48,24,0,260,273,3,56,28,
        0,261,273,3,58,29,0,262,273,3,60,30,0,263,273,3,100,50,0,264,273,
        3,106,53,0,265,273,3,110,55,0,266,273,3,20,10,0,267,273,3,16,8,0,
        268,273,3,18,9,0,269,273,3,112,56,0,270,273,3,128,64,0,271,273,3,
        134,67,0,272,250,1,0,0,0,272,251,1,0,0,0,272,252,1,0,0,0,272,253,
        1,0,0,0,272,254,1,0,0,0,272,255,1,0,0,0,272,256,1,0,0,0,272,257,
        1,0,0,0,272,258,1,0,0,0,272,259,1,0,0,0,272,260,1,0,0,0,272,261,
        1,0,0,0,272,262,1,0,0,0,272,263,1,0,0,0,272,264,1,0,0,0,272,265,
        1,0,0,0,272,266,1,0,0,0,272,267,1,0,0,0,272,268,1,0,0,0,272,269,
        1,0,0,0,272,270,1,0,0,0,272,271,1,0,0,0,273,5,1,0,0,0,274,275,5,
        32,0,0,275,279,5,156,0,0,276,277,3,180,90,0,277,278,5,2,0,0,278,
        280,1,0,0,0,279,276,1,0,0,0,279,280,1,0,0,0,280,281,1,0,0,0,281,
        304,3,182,91,0,282,292,5,142,0,0,283,284,5,161,0,0,284,293,3,182,
        91,0,285,287,5,49,0,0,286,285,1,0,0,0,286,287,1,0,0,0,287,288,1,
        0,0,0,288,289,3,186,93,0,289,290,5,161,0,0,290,291,3,186,93,0,291,
        293,1,0,0,0,292,283,1,0,0,0,292,286,1,0,0,0,293,305,1,0,0,0,294,
        296,5,29,0,0,295,297,5,49,0,0,296,295,1,0,0,0,296,297,1,0,0,0,297,
        298,1,0,0,0,298,305,3,30,15,0,299,301,5,68,0,0,300,302,5,49,0,0,
        301,300,1,0,0,0,301,302,1,0,0,0,302,303,1,0,0,0,303,305,3,186,93,
        0,304,282,1,0,0,0,304,294,1,0,0,0,304,299,1,0,0,0,305,7,1,0,0,0,
        306,314,5,34,0,0,307,315,3,180,90,0,308,309,3,180,90,0,309,310,5,
        2,0,0,310,312,1,0,0,0,311,308,1,0,0,0,311,312,1,0,0,0,312,313,1,
        0,0,0,313,315,3,184,92,0,314,307,1,0,0,0,314,311,1,0,0,0,314,315,
        1,0,0,0,315,9,1,0,0,0,316,318,5,38,0,0,317,319,5,59,0,0,318,317,
        1,0,0,0,318,319,1,0,0,0,319,320,1,0,0,0,320,321,3,62,31,0,321,322,
        5,36,0,0,322,323,3,180,90,0,323,11,1,0,0,0,324,326,5,41,0,0,325,
        327,7,0,0,0,326,325,1,0,0,0,326,327,1,0,0,0,327,329,1,0,0,0,328,
        330,5,162,0,0,329,328,1,0,0,0,329,330,1,0,0,0,330,13,1,0,0,0,331,
        333,7,1,0,0,332,334,5,162,0,0,333,332,1,0,0,0,333,334,1,0,0,0,334,
        15,1,0,0,0,335,337,5,147,0,0,336,338,5,162,0,0,337,336,1,0,0,0,337,
        338,1,0,0,0,338,344,1,0,0,0,339,341,5,161,0,0,340,342,5,151,0,0,
        341,340,1,0,0,0,341,342,1,0,0,0,342,343,1,0,0,0,343,345,3,206,103,
        0,344,339,1,0,0,0,344,345,1,0,0,0,345,17,1,0,0,0,346,347,5,151,0,
        0,347,348,3,206,103,0,348,19,1,0,0,0,349,351,5,141,0,0,350,352,5,
        151,0,0,351,350,1,0,0,0,351,352,1,0,0,0,352,353,1,0,0,0,353,354,
        3,206,103,0,354,21,1,0,0,0,355,357,5,53,0,0,356,358,5,167,0,0,357,
        356,1,0,0,0,357,358,1,0,0,0,358,359,1,0,0,0,359,363,5,96,0,0,360,
        361,5,92,0,0,361,362,5,116,0,0,362,364,5,76,0,0,363,360,1,0,0,0,
        363,364,1,0,0,0,364,368,1,0,0,0,365,366,3,180,90,0,366,367,5,2,0,
        0,367,369,1,0,0,0,368,365,1,0,0,0,368,369,1,0,0,0,369,370,1,0,0,
        0,370,371,3,196,98,0,371,372,5,123,0,0,372,373,3,182,91,0,373,374,
        5,3,0,0,374,379,3,24,12,0,375,376,5,5,0,0,376,378,3,24,12,0,377,
        375,1,0,0,0,378,381,1,0,0,0,379,377,1,0,0,0,379,380,1,0,0,0,380,
        382,1,0,0,0,381,379,1,0,0,0,382,385,5,4,0,0,383,384,5,175,0,0,384,
        386,3,62,31,0,385,383,1,0,0,0,385,386,1,0,0,0,386,23,1,0,0,0,387,
        390,3,62,31,0,388,389,5,48,0,0,389,391,3,192,96,0,390,388,1,0,0,
        0,390,391,1,0,0,0,391,393,1,0,0,0,392,394,3,152,76,0,393,392,1,0,
        0,0,393,394,1,0,0,0,394,25,1,0,0,0,395,397,5,53,0,0,396,398,7,2,
        0,0,397,396,1,0,0,0,397,398,1,0,0,0,398,399,1,0,0,0,399,403,5,156,
        0,0,400,401,5,92,0,0,401,402,5,116,0,0,402,404,5,76,0,0,403,400,
        1,0,0,0,403,404,1,0,0,0,404,408,1,0,0,0,405,406,3,180,90,0,406,407,
        5,2,0,0,407,409,1,0,0,0,408,405,1,0,0,0,408,409,1,0,0,0,409,410,
        1,0,0,0,410,433,3,182,91,0,411,412,5,3,0,0,412,417,3,30,15,0,413,
        414,5,5,0,0,414,416,3,30,15,0,415,413,1,0,0,0,416,419,1,0,0,0,417,
        418,1,0,0,0,417,415,1,0,0,0,418,424,1,0,0,0,419,417,1,0,0,0,420,
        421,5,5,0,0,421,423,3,38,19,0,422,420,1,0,0,0,423,426,1,0,0,0,424,
        422,1,0,0,0,424,425,1,0,0,0,425,427,1,0,0,0,426,424,1,0,0,0,427,
        429,5,4,0,0,428,430,3,28,14,0,429,428,1,0,0,0,429,430,1,0,0,0,430,
        434,1,0,0,0,431,432,5,36,0,0,432,434,3,112,56,0,433,411,1,0,0,0,
        433,431,1,0,0,0,434,27,1,0,0,0,435,436,5,179,0,0,436,439,5,149,0,
        0,437,439,5,155,0,0,438,435,1,0,0,0,438,437,1,0,0,0,439,448,1,0,
        0,0,440,444,5,5,0,0,441,442,5,179,0,0,442,445,5,149,0,0,443,445,
        5,155,0,0,444,441,1,0,0,0,444,443,1,0,0,0,445,447,1,0,0,0,446,440,
        1,0,0,0,447,450,1,0,0,0,448,446,1,0,0,0,448,449,1,0,0,0,449,29,1,
        0,0,0,450,448,1,0,0,0,451,453,3,186,93,0,452,454,3,32,16,0,453,452,
        1,0,0,0,453,454,1,0,0,0,454,458,1,0,0,0,455,457,3,34,17,0,456,455,
        1,0,0,0,457,460,1,0,0,0,458,456,1,0,0,0,458,459,1,0,0,0,459,31,1,
        0,0,0,460,458,1,0,0,0,461,463,3,176,88,0,462,461,1,0,0,0,463,464,
        1,0,0,0,464,465,1,0,0,0,464,462,1,0,0,0,465,476,1,0,0,0,466,467,
        5,3,0,0,467,468,3,36,18,0,468,469,5,4,0,0,469,477,1,0,0,0,470,471,
        5,3,0,0,471,472,3,36,18,0,472,473,5,5,0,0,473,474,3,36,18,0,474,
        475,5,4,0,0,475,477,1,0,0,0,476,466,1,0,0,0,476,470,1,0,0,0,476,
        477,1,0,0,0,477,33,1,0,0,0,478,479,5,52,0,0,479,481,3,176,88,0,480,
        478,1,0,0,0,480,481,1,0,0,0,481,531,1,0,0,0,482,483,5,133,0,0,483,
        485,5,107,0,0,484,486,3,152,76,0,485,484,1,0,0,0,485,486,1,0,0,0,
        486,488,1,0,0,0,487,489,3,42,21,0,488,487,1,0,0,0,488,489,1,0,0,
        0,489,491,1,0,0,0,490,492,5,39,0,0,491,490,1,0,0,0,491,492,1,0,0,
        0,492,532,1,0,0,0,493,495,5,116,0,0,494,493,1,0,0,0,494,495,1,0,
        0,0,495,496,1,0,0,0,496,499,5,119,0,0,497,499,5,167,0,0,498,494,
        1,0,0,0,498,497,1,0,0,0,499,501,1,0,0,0,500,502,3,42,21,0,501,500,
        1,0,0,0,501,502,1,0,0,0,502,532,1,0,0,0,503,504,5,47,0,0,504,505,
        5,3,0,0,505,506,3,62,31,0,506,507,5,4,0,0,507,532,1,0,0,0,508,515,
        5,60,0,0,509,516,3,36,18,0,510,516,3,92,46,0,511,512,5,3,0,0,512,
        513,3,62,31,0,513,514,5,4,0,0,514,516,1,0,0,0,515,509,1,0,0,0,515,
        510,1,0,0,0,515,511,1,0,0,0,516,532,1,0,0,0,517,518,5,48,0,0,518,
        532,3,192,96,0,519,532,3,40,20,0,520,521,5,87,0,0,521,523,5,33,0,
        0,522,520,1,0,0,0,522,523,1,0,0,0,523,524,1,0,0,0,524,525,5,36,0,
        0,525,526,5,3,0,0,526,527,3,62,31,0,527,529,5,4,0,0,528,530,7,3,
        0,0,529,528,1,0,0,0,529,530,1,0,0,0,530,532,1,0,0,0,531,482,1,0,
        0,0,531,498,1,0,0,0,531,503,1,0,0,0,531,508,1,0,0,0,531,517,1,0,
        0,0,531,519,1,0,0,0,531,522,1,0,0,0,532,35,1,0,0,0,533,535,7,4,0,
        0,534,533,1,0,0,0,534,535,1,0,0,0,535,536,1,0,0,0,536,537,5,181,
        0,0,537,37,1,0,0,0,538,539,5,52,0,0,539,541,3,176,88,0,540,538,1,
        0,0,0,540,541,1,0,0,0,541,579,1,0,0,0,542,543,5,133,0,0,543,546,
        5,107,0,0,544,546,5,167,0,0,545,542,1,0,0,0,545,544,1,0,0,0,546,
        547,1,0,0,0,547,548,5,3,0,0,548,553,3,24,12,0,549,550,5,5,0,0,550,
        552,3,24,12,0,551,549,1,0,0,0,552,555,1,0,0,0,553,551,1,0,0,0,553,
        554,1,0,0,0,554,556,1,0,0,0,555,553,1,0,0,0,556,558,5,4,0,0,557,
        559,3,42,21,0,558,557,1,0,0,0,558,559,1,0,0,0,559,580,1,0,0,0,560,
        561,5,47,0,0,561,562,5,3,0,0,562,563,3,62,31,0,563,564,5,4,0,0,564,
        580,1,0,0,0,565,566,5,84,0,0,566,567,5,107,0,0,567,568,5,3,0,0,568,
        573,3,186,93,0,569,570,5,5,0,0,570,572,3,186,93,0,571,569,1,0,0,
        0,572,575,1,0,0,0,573,571,1,0,0,0,573,574,1,0,0,0,574,576,1,0,0,
        0,575,573,1,0,0,0,576,577,5,4,0,0,577,578,3,40,20,0,578,580,1,0,
        0,0,579,545,1,0,0,0,579,560,1,0,0,0,579,565,1,0,0,0,580,39,1,0,0,
        0,581,582,5,138,0,0,582,594,3,194,97,0,583,584,5,3,0,0,584,589,3,
        186,93,0,585,586,5,5,0,0,586,588,3,186,93,0,587,585,1,0,0,0,588,
        591,1,0,0,0,589,587,1,0,0,0,589,590,1,0,0,0,590,592,1,0,0,0,591,
        589,1,0,0,0,592,593,5,4,0,0,593,595,1,0,0,0,594,583,1,0,0,0,594,
        595,1,0,0,0,595,610,1,0,0,0,596,597,5,123,0,0,597,604,7,5,0,0,598,
        599,5,153,0,0,599,605,7,6,0,0,600,605,5,44,0,0,601,605,5,144,0,0,
        602,603,5,115,0,0,603,605,5,28,0,0,604,598,1,0,0,0,604,600,1,0,0,
        0,604,601,1,0,0,0,604,602,1,0,0,0,605,609,1,0,0,0,606,607,5,112,
        0,0,607,609,3,176,88,0,608,596,1,0,0,0,608,606,1,0,0,0,609,612,1,
        0,0,0,610,608,1,0,0,0,610,611,1,0,0,0,611,621,1,0,0,0,612,610,1,
        0,0,0,613,615,5,116,0,0,614,613,1,0,0,0,614,615,1,0,0,0,615,616,
        1,0,0,0,616,619,5,61,0,0,617,618,5,98,0,0,618,620,7,7,0,0,619,617,
        1,0,0,0,619,620,1,0,0,0,620,622,1,0,0,0,621,614,1,0,0,0,621,622,
        1,0,0,0,622,41,1,0,0,0,623,624,5,123,0,0,624,625,5,51,0,0,625,626,
        7,8,0,0,626,43,1,0,0,0,627,629,5,53,0,0,628,630,7,2,0,0,629,628,
        1,0,0,0,629,630,1,0,0,0,630,631,1,0,0,0,631,635,5,163,0,0,632,633,
        5,92,0,0,633,634,5,116,0,0,634,636,5,76,0,0,635,632,1,0,0,0,635,
        636,1,0,0,0,636,640,1,0,0,0,637,638,3,180,90,0,638,639,5,2,0,0,639,
        641,1,0,0,0,640,637,1,0,0,0,640,641,1,0,0,0,641,642,1,0,0,0,642,
        647,3,198,99,0,643,648,5,40,0,0,644,648,5,30,0,0,645,646,5,101,0,
        0,646,648,5,121,0,0,647,643,1,0,0,0,647,644,1,0,0,0,647,645,1,0,
        0,0,647,648,1,0,0,0,648,663,1,0,0,0,649,664,5,63,0,0,650,664,5,100,
        0,0,651,661,5,168,0,0,652,653,5,121,0,0,653,658,3,186,93,0,654,655,
        5,5,0,0,655,657,3,186,93,0,656,654,1,0,0,0,657,660,1,0,0,0,658,656,
        1,0,0,0,658,659,1,0,0,0,659,662,1,0,0,0,660,658,1,0,0,0,661,652,
        1,0,0,0,661,662,1,0,0,0,662,664,1,0,0,0,663,649,1,0,0,0,663,650,
        1,0,0,0,663,651,1,0,0,0,664,665,1,0,0,0,665,666,5,123,0,0,666,670,
        3,182,91,0,667,668,5,83,0,0,668,669,5,69,0,0,669,671,5,148,0,0,670,
        667,1,0,0,0,670,671,1,0,0,0,671,674,1,0,0,0,672,673,5,174,0,0,673,
        675,3,62,31,0,674,672,1,0,0,0,674,675,1,0,0,0,675,676,1,0,0,0,676,
        685,5,41,0,0,677,682,3,128,64,0,678,682,3,100,50,0,679,682,3,56,
        28,0,680,682,3,112,56,0,681,677,1,0,0,0,681,678,1,0,0,0,681,679,
        1,0,0,0,681,680,1,0,0,0,682,683,1,0,0,0,683,684,5,1,0,0,684,686,
        1,0,0,0,685,681,1,0,0,0,686,687,1,0,0,0,687,685,1,0,0,0,687,688,
        1,0,0,0,688,689,1,0,0,0,689,690,5,71,0,0,690,45,1,0,0,0,691,693,
        5,53,0,0,692,694,7,2,0,0,693,692,1,0,0,0,693,694,1,0,0,0,694,695,
        1,0,0,0,695,699,5,172,0,0,696,697,5,92,0,0,697,698,5,116,0,0,698,
        700,5,76,0,0,699,696,1,0,0,0,699,700,1,0,0,0,700,704,1,0,0,0,701,
        702,3,180,90,0,702,703,5,2,0,0,703,705,1,0,0,0,704,701,1,0,0,0,704,
        705,1,0,0,0,705,706,1,0,0,0,706,718,3,200,100,0,707,708,5,3,0,0,
        708,713,3,186,93,0,709,710,5,5,0,0,710,712,3,186,93,0,711,709,1,
        0,0,0,712,715,1,0,0,0,713,711,1,0,0,0,713,714,1,0,0,0,714,716,1,
        0,0,0,715,713,1,0,0,0,716,717,5,4,0,0,717,719,1,0,0,0,718,707,1,
        0,0,0,718,719,1,0,0,0,719,720,1,0,0,0,720,721,5,36,0,0,721,722,3,
        112,56,0,722,47,1,0,0,0,723,724,5,53,0,0,724,725,5,173,0,0,725,729,
        5,156,0,0,726,727,5,92,0,0,727,728,5,116,0,0,728,730,5,76,0,0,729,
        726,1,0,0,0,729,730,1,0,0,0,730,734,1,0,0,0,731,732,3,180,90,0,732,
        733,5,2,0,0,733,735,1,0,0,0,734,731,1,0,0,0,734,735,1,0,0,0,735,
        736,1,0,0,0,736,737,3,182,91,0,737,738,5,169,0,0,738,750,3,202,101,
        0,739,740,5,3,0,0,740,745,3,164,82,0,741,742,5,5,0,0,742,744,3,164,
        82,0,743,741,1,0,0,0,744,747,1,0,0,0,745,743,1,0,0,0,745,746,1,0,
        0,0,746,748,1,0,0,0,747,745,1,0,0,0,748,749,5,4,0,0,749,751,1,0,
        0,0,750,739,1,0,0,0,750,751,1,0,0,0,751,49,1,0,0,0,752,754,5,177,
        0,0,753,755,5,137,0,0,754,753,1,0,0,0,754,755,1,0,0,0,755,756,1,
        0,0,0,756,761,3,52,26,0,757,758,5,5,0,0,758,760,3,52,26,0,759,757,
        1,0,0,0,760,763,1,0,0,0,761,759,1,0,0,0,761,762,1,0,0,0,762,51,1,
        0,0,0,763,761,1,0,0,0,764,765,3,54,27,0,765,770,5,36,0,0,766,768,
        5,116,0,0,767,766,1,0,0,0,767,768,1,0,0,0,768,769,1,0,0,0,769,771,
        5,113,0,0,770,767,1,0,0,0,770,771,1,0,0,0,771,772,1,0,0,0,772,773,
        5,3,0,0,773,774,3,112,56,0,774,775,5,4,0,0,775,53,1,0,0,0,776,788,
        3,182,91,0,777,778,5,3,0,0,778,783,3,186,93,0,779,780,5,5,0,0,780,
        782,3,186,93,0,781,779,1,0,0,0,782,785,1,0,0,0,783,781,1,0,0,0,783,
        784,1,0,0,0,784,786,1,0,0,0,785,783,1,0,0,0,786,787,5,4,0,0,787,
        789,1,0,0,0,788,777,1,0,0,0,788,789,1,0,0,0,789,55,1,0,0,0,790,792,
        3,50,25,0,791,790,1,0,0,0,791,792,1,0,0,0,792,793,1,0,0,0,793,794,
        5,63,0,0,794,795,5,85,0,0,795,798,3,132,66,0,796,797,5,175,0,0,797,
        799,3,62,31,0,798,796,1,0,0,0,798,799,1,0,0,0,799,801,1,0,0,0,800,
        802,3,102,51,0,801,800,1,0,0,0,801,802,1,0,0,0,802,804,1,0,0,0,803,
        805,3,146,73,0,804,803,1,0,0,0,804,805,1,0,0,0,805,807,1,0,0,0,806,
        808,3,148,74,0,807,806,1,0,0,0,807,808,1,0,0,0,808,57,1,0,0,0,809,
        811,5,65,0,0,810,812,5,59,0,0,811,810,1,0,0,0,811,812,1,0,0,0,812,
        813,1,0,0,0,813,814,3,180,90,0,814,59,1,0,0,0,815,816,5,68,0,0,816,
        819,7,9,0,0,817,818,5,92,0,0,818,820,5,76,0,0,819,817,1,0,0,0,819,
        820,1,0,0,0,820,824,1,0,0,0,821,822,3,180,90,0,822,823,5,2,0,0,823,
        825,1,0,0,0,824,821,1,0,0,0,824,825,1,0,0,0,825,826,1,0,0,0,826,
        827,3,226,113,0,827,61,1,0,0,0,828,829,3,64,32,0,829,63,1,0,0,0,
        830,831,3,178,89,0,831,847,5,3,0,0,832,834,5,66,0,0,833,832,1,0,
        0,0,833,834,1,0,0,0,834,835,1,0,0,0,835,840,3,62,31,0,836,837,5,
        5,0,0,837,839,3,62,31,0,838,836,1,0,0,0,839,842,1,0,0,0,840,838,
        1,0,0,0,840,841,1,0,0,0,841,844,1,0,0,0,842,840,1,0,0,0,843,845,
        3,146,73,0,844,843,1,0,0,0,844,845,1,0,0,0,845,848,1,0,0,0,846,848,
        5,7,0,0,847,833,1,0,0,0,847,846,1,0,0,0,847,848,1,0,0,0,848,849,
        1,0,0,0,849,851,5,4,0,0,850,852,3,94,47,0,851,850,1,0,0,0,851,852,
        1,0,0,0,852,854,1,0,0,0,853,855,3,136,68,0,854,853,1,0,0,0,854,855,
        1,0,0,0,855,857,1,0,0,0,856,858,3,140,70,0,857,856,1,0,0,0,857,858,
        1,0,0,0,858,898,1,0,0,0,859,860,5,3,0,0,860,865,3,62,31,0,861,862,
        5,5,0,0,862,864,3,62,31,0,863,861,1,0,0,0,864,867,1,0,0,0,865,863,
        1,0,0,0,865,866,1,0,0,0,866,868,1,0,0,0,867,865,1,0,0,0,868,869,
        5,4,0,0,869,898,1,0,0,0,870,871,5,46,0,0,871,872,5,3,0,0,872,873,
        3,62,31,0,873,874,5,36,0,0,874,875,3,32,16,0,875,876,5,4,0,0,876,
        898,1,0,0,0,877,879,5,45,0,0,878,880,3,62,31,0,879,878,1,0,0,0,879,
        880,1,0,0,0,880,886,1,0,0,0,881,882,5,174,0,0,882,883,3,62,31,0,
        883,884,5,159,0,0,884,885,3,62,31,0,885,887,1,0,0,0,886,881,1,0,
        0,0,887,888,1,0,0,0,888,886,1,0,0,0,888,889,1,0,0,0,889,892,1,0,
        0,0,890,891,5,70,0,0,891,893,3,62,31,0,892,890,1,0,0,0,892,893,1,
        0,0,0,893,894,1,0,0,0,894,895,5,71,0,0,895,898,1,0,0,0,896,898,3,
        66,33,0,897,830,1,0,0,0,897,859,1,0,0,0,897,870,1,0,0,0,897,877,
        1,0,0,0,897,896,1,0,0,0,898,65,1,0,0,0,899,904,3,68,34,0,900,901,
        5,124,0,0,901,903,3,68,34,0,902,900,1,0,0,0,903,906,1,0,0,0,904,
        902,1,0,0,0,904,905,1,0,0,0,905,67,1,0,0,0,906,904,1,0,0,0,907,912,
        3,70,35,0,908,909,5,35,0,0,909,911,3,70,35,0,910,908,1,0,0,0,911,
        914,1,0,0,0,912,910,1,0,0,0,912,913,1,0,0,0,913,69,1,0,0,0,914,912,
        1,0,0,0,915,917,5,116,0,0,916,915,1,0,0,0,917,920,1,0,0,0,918,916,
        1,0,0,0,918,919,1,0,0,0,919,921,1,0,0,0,920,918,1,0,0,0,921,922,
        3,72,36,0,922,71,1,0,0,0,923,1006,3,74,37,0,924,925,7,10,0,0,925,
        1005,3,74,37,0,926,928,5,104,0,0,927,929,5,116,0,0,928,927,1,0,0,
        0,928,929,1,0,0,0,929,932,1,0,0,0,930,931,5,66,0,0,931,933,5,85,
        0,0,932,930,1,0,0,0,932,933,1,0,0,0,933,934,1,0,0,0,934,1005,3,74,
        37,0,935,937,5,116,0,0,936,935,1,0,0,0,936,937,1,0,0,0,937,938,1,
        0,0,0,938,939,5,42,0,0,939,940,3,74,37,0,940,941,5,35,0,0,941,942,
        3,74,37,0,942,1005,1,0,0,0,943,945,5,116,0,0,944,943,1,0,0,0,944,
        945,1,0,0,0,945,946,1,0,0,0,946,985,5,95,0,0,947,957,5,3,0,0,948,
        958,3,112,56,0,949,954,3,74,37,0,950,951,5,5,0,0,951,953,3,74,37,
        0,952,950,1,0,0,0,953,956,1,0,0,0,954,952,1,0,0,0,954,955,1,0,0,
        0,955,958,1,0,0,0,956,954,1,0,0,0,957,948,1,0,0,0,957,949,1,0,0,
        0,957,958,1,0,0,0,958,959,1,0,0,0,959,986,5,4,0,0,960,961,3,180,
        90,0,961,962,5,2,0,0,962,964,1,0,0,0,963,960,1,0,0,0,963,964,1,0,
        0,0,964,965,1,0,0,0,965,986,3,182,91,0,966,967,3,180,90,0,967,968,
        5,2,0,0,968,970,1,0,0,0,969,966,1,0,0,0,969,970,1,0,0,0,970,971,
        1,0,0,0,971,972,3,218,109,0,972,981,5,3,0,0,973,978,3,74,37,0,974,
        975,5,5,0,0,975,977,3,74,37,0,976,974,1,0,0,0,977,980,1,0,0,0,978,
        976,1,0,0,0,978,979,1,0,0,0,979,982,1,0,0,0,980,978,1,0,0,0,981,
        973,1,0,0,0,981,982,1,0,0,0,982,983,1,0,0,0,983,984,5,4,0,0,984,
        986,1,0,0,0,985,947,1,0,0,0,985,963,1,0,0,0,985,969,1,0,0,0,986,
        1005,1,0,0,0,987,989,5,116,0,0,988,987,1,0,0,0,988,989,1,0,0,0,989,
        998,1,0,0,0,990,991,5,110,0,0,991,994,3,74,37,0,992,993,5,72,0,0,
        993,995,3,74,37,0,994,992,1,0,0,0,994,995,1,0,0,0,995,999,1,0,0,
        0,996,997,7,11,0,0,997,999,3,74,37,0,998,990,1,0,0,0,998,996,1,0,
        0,0,999,1005,1,0,0,0,1000,1005,5,105,0,0,1001,1005,5,118,0,0,1002,
        1003,5,116,0,0,1003,1005,5,119,0,0,1004,924,1,0,0,0,1004,926,1,0,
        0,0,1004,936,1,0,0,0,1004,944,1,0,0,0,1004,988,1,0,0,0,1004,1000,
        1,0,0,0,1004,1001,1,0,0,0,1004,1002,1,0,0,0,1005,1008,1,0,0,0,1006,
        1004,1,0,0,0,1006,1007,1,0,0,0,1007,73,1,0,0,0,1008,1006,1,0,0,0,
        1009,1014,3,76,38,0,1010,1011,7,12,0,0,1011,1013,3,76,38,0,1012,
        1010,1,0,0,0,1013,1016,1,0,0,0,1014,1012,1,0,0,0,1014,1015,1,0,0,
        0,1015,75,1,0,0,0,1016,1014,1,0,0,0,1017,1022,3,78,39,0,1018,1019,
        7,13,0,0,1019,1021,3,78,39,0,1020,1018,1,0,0,0,1021,1024,1,0,0,0,
        1022,1020,1,0,0,0,1022,1023,1,0,0,0,1023,77,1,0,0,0,1024,1022,1,
        0,0,0,1025,1030,3,80,40,0,1026,1027,7,4,0,0,1027,1029,3,80,40,0,
        1028,1026,1,0,0,0,1029,1032,1,0,0,0,1030,1028,1,0,0,0,1030,1031,
        1,0,0,0,1031,79,1,0,0,0,1032,1030,1,0,0,0,1033,1038,3,82,41,0,1034,
        1035,7,14,0,0,1035,1037,3,82,41,0,1036,1034,1,0,0,0,1037,1040,1,
        0,0,0,1038,1036,1,0,0,0,1038,1039,1,0,0,0,1039,81,1,0,0,0,1040,1038,
        1,0,0,0,1041,1046,3,84,42,0,1042,1043,7,15,0,0,1043,1045,3,84,42,
        0,1044,1042,1,0,0,0,1045,1048,1,0,0,0,1046,1044,1,0,0,0,1046,1047,
        1,0,0,0,1047,83,1,0,0,0,1048,1046,1,0,0,0,1049,1054,3,86,43,0,1050,
        1051,5,48,0,0,1051,1053,3,192,96,0,1052,1050,1,0,0,0,1053,1056,1,
        0,0,0,1054,1052,1,0,0,0,1054,1055,1,0,0,0,1055,85,1,0,0,0,1056,1054,
        1,0,0,0,1057,1059,7,16,0,0,1058,1057,1,0,0,0,1059,1062,1,0,0,0,1060,
        1058,1,0,0,0,1060,1061,1,0,0,0,1061,1063,1,0,0,0,1062,1060,1,0,0,
        0,1063,1064,3,88,44,0,1064,87,1,0,0,0,1065,1089,3,92,46,0,1066,1089,
        5,182,0,0,1067,1068,3,180,90,0,1068,1069,5,2,0,0,1069,1071,1,0,0,
        0,1070,1067,1,0,0,0,1070,1071,1,0,0,0,1071,1072,1,0,0,0,1072,1073,
        3,182,91,0,1073,1074,5,2,0,0,1074,1075,3,186,93,0,1075,1089,1,0,
        0,0,1076,1089,3,188,94,0,1077,1079,5,116,0,0,1078,1077,1,0,0,0,1078,
        1079,1,0,0,0,1079,1080,1,0,0,0,1080,1082,5,76,0,0,1081,1078,1,0,
        0,0,1081,1082,1,0,0,0,1082,1083,1,0,0,0,1083,1084,5,3,0,0,1084,1085,
        3,112,56,0,1085,1086,5,4,0,0,1086,1089,1,0,0,0,1087,1089,3,90,45,
        0,1088,1065,1,0,0,0,1088,1066,1,0,0,0,1088,1070,1,0,0,0,1088,1076,
        1,0,0,0,1088,1081,1,0,0,0,1088,1087,1,0,0,0,1089,89,1,0,0,0,1090,
        1091,5,135,0,0,1091,1096,5,3,0,0,1092,1097,5,93,0,0,1093,1094,7,
        17,0,0,1094,1095,5,5,0,0,1095,1097,3,160,80,0,1096,1092,1,0,0,0,
        1096,1093,1,0,0,0,1097,1098,1,0,0,0,1098,1099,5,4,0,0,1099,91,1,
        0,0,0,1100,1101,7,18,0,0,1101,93,1,0,0,0,1102,1103,5,178,0,0,1103,
        1104,5,89,0,0,1104,1105,5,3,0,0,1105,1106,5,125,0,0,1106,1107,5,
        43,0,0,1107,1108,3,62,31,0,1108,1109,5,4,0,0,1109,95,1,0,0,0,1110,
        1111,5,3,0,0,1111,1116,3,62,31,0,1112,1113,5,5,0,0,1113,1115,3,62,
        31,0,1114,1112,1,0,0,0,1115,1118,1,0,0,0,1116,1114,1,0,0,0,1116,
        1117,1,0,0,0,1117,1119,1,0,0,0,1118,1116,1,0,0,0,1119,1120,5,4,0,
        0,1120,97,1,0,0,0,1121,1122,5,171,0,0,1122,1127,3,96,48,0,1123,1124,
        5,5,0,0,1124,1126,3,96,48,0,1125,1123,1,0,0,0,1126,1129,1,0,0,0,
        1127,1125,1,0,0,0,1127,1128,1,0,0,0,1128,99,1,0,0,0,1129,1127,1,
        0,0,0,1130,1132,3,50,25,0,1131,1130,1,0,0,0,1131,1132,1,0,0,0,1132,
        1138,1,0,0,0,1133,1139,5,100,0,0,1134,1139,5,143,0,0,1135,1136,5,
        100,0,0,1136,1137,5,124,0,0,1137,1139,7,8,0,0,1138,1133,1,0,0,0,
        1138,1134,1,0,0,0,1138,1135,1,0,0,0,1139,1140,1,0,0,0,1140,1144,
        5,103,0,0,1141,1142,3,180,90,0,1142,1143,5,2,0,0,1143,1145,1,0,0,
        0,1144,1141,1,0,0,0,1144,1145,1,0,0,0,1145,1146,1,0,0,0,1146,1149,
        3,182,91,0,1147,1148,5,36,0,0,1148,1150,3,208,104,0,1149,1147,1,
        0,0,0,1149,1150,1,0,0,0,1150,1162,1,0,0,0,1151,1152,5,3,0,0,1152,
        1157,3,186,93,0,1153,1154,5,5,0,0,1154,1156,3,186,93,0,1155,1153,
        1,0,0,0,1156,1159,1,0,0,0,1157,1155,1,0,0,0,1157,1158,1,0,0,0,1158,
        1160,1,0,0,0,1159,1157,1,0,0,0,1160,1161,5,4,0,0,1161,1163,1,0,0,
        0,1162,1151,1,0,0,0,1162,1163,1,0,0,0,1163,1173,1,0,0,0,1164,1168,
        3,112,56,0,1165,1167,3,104,52,0,1166,1165,1,0,0,0,1167,1170,1,0,
        0,0,1168,1166,1,0,0,0,1168,1169,1,0,0,0,1169,1174,1,0,0,0,1170,1168,
        1,0,0,0,1171,1172,5,60,0,0,1172,1174,5,171,0,0,1173,1164,1,0,0,0,
        1173,1171,1,0,0,0,1174,1176,1,0,0,0,1175,1177,3,102,51,0,1176,1175,
        1,0,0,0,1176,1177,1,0,0,0,1177,101,1,0,0,0,1178,1187,5,145,0,0,1179,
        1188,5,7,0,0,1180,1185,3,62,31,0,1181,1183,5,36,0,0,1182,1181,1,
        0,0,0,1182,1183,1,0,0,0,1183,1184,1,0,0,0,1184,1186,3,190,95,0,1185,
        1182,1,0,0,0,1185,1186,1,0,0,0,1186,1188,1,0,0,0,1187,1179,1,0,0,
        0,1187,1180,1,0,0,0,1188,1202,1,0,0,0,1189,1198,5,5,0,0,1190,1199,
        5,7,0,0,1191,1196,3,62,31,0,1192,1194,5,36,0,0,1193,1192,1,0,0,0,
        1193,1194,1,0,0,0,1194,1195,1,0,0,0,1195,1197,3,190,95,0,1196,1193,
        1,0,0,0,1196,1197,1,0,0,0,1197,1199,1,0,0,0,1198,1190,1,0,0,0,1198,
        1191,1,0,0,0,1199,1201,1,0,0,0,1200,1189,1,0,0,0,1201,1204,1,0,0,
        0,1202,1200,1,0,0,0,1202,1203,1,0,0,0,1203,103,1,0,0,0,1204,1202,
        1,0,0,0,1205,1206,5,123,0,0,1206,1221,5,51,0,0,1207,1208,5,3,0,0,
        1208,1213,3,24,12,0,1209,1210,5,5,0,0,1210,1212,3,24,12,0,1211,1209,
        1,0,0,0,1212,1215,1,0,0,0,1213,1211,1,0,0,0,1213,1214,1,0,0,0,1214,
        1216,1,0,0,0,1215,1213,1,0,0,0,1216,1219,5,4,0,0,1217,1218,5,175,
        0,0,1218,1220,3,62,31,0,1219,1217,1,0,0,0,1219,1220,1,0,0,0,1220,
        1222,1,0,0,0,1221,1207,1,0,0,0,1221,1222,1,0,0,0,1222,1223,1,0,0,
        0,1223,1250,5,67,0,0,1224,1251,5,117,0,0,1225,1226,5,168,0,0,1226,
        1229,5,153,0,0,1227,1230,3,186,93,0,1228,1230,3,130,65,0,1229,1227,
        1,0,0,0,1229,1228,1,0,0,0,1230,1231,1,0,0,0,1231,1232,5,6,0,0,1232,
        1243,3,62,31,0,1233,1236,5,5,0,0,1234,1237,3,186,93,0,1235,1237,
        3,130,65,0,1236,1234,1,0,0,0,1236,1235,1,0,0,0,1237,1238,1,0,0,0,
        1238,1239,5,6,0,0,1239,1240,3,62,31,0,1240,1242,1,0,0,0,1241,1233,
        1,0,0,0,1242,1245,1,0,0,0,1243,1241,1,0,0,0,1243,1244,1,0,0,0,1244,
        1248,1,0,0,0,1245,1243,1,0,0,0,1246,1247,5,175,0,0,1247,1249,3,62,
        31,0,1248,1246,1,0,0,0,1248,1249,1,0,0,0,1249,1251,1,0,0,0,1250,
        1224,1,0,0,0,1250,1225,1,0,0,0,1251,105,1,0,0,0,1252,1256,5,131,
        0,0,1253,1254,3,180,90,0,1254,1255,5,2,0,0,1255,1257,1,0,0,0,1256,
        1253,1,0,0,0,1256,1257,1,0,0,0,1257,1258,1,0,0,0,1258,1265,3,204,
        102,0,1259,1260,5,6,0,0,1260,1266,3,108,54,0,1261,1262,5,3,0,0,1262,
        1263,3,108,54,0,1263,1264,5,4,0,0,1264,1266,1,0,0,0,1265,1259,1,
        0,0,0,1265,1261,1,0,0,0,1265,1266,1,0,0,0,1266,107,1,0,0,0,1267,
        1271,3,36,18,0,1268,1271,3,176,88,0,1269,1271,5,183,0,0,1270,1267,
        1,0,0,0,1270,1268,1,0,0,0,1270,1269,1,0,0,0,1271,109,1,0,0,0,1272,
        1283,5,140,0,0,1273,1284,3,192,96,0,1274,1275,3,180,90,0,1275,1276,
        5,2,0,0,1276,1278,1,0,0,0,1277,1274,1,0,0,0,1277,1278,1,0,0,0,1278,
        1281,1,0,0,0,1279,1282,3,182,91,0,1280,1282,3,196,98,0,1281,1279,
        1,0,0,0,1281,1280,1,0,0,0,1282,1284,1,0,0,0,1283,1273,1,0,0,0,1283,
        1277,1,0,0,0,1283,1284,1,0,0,0,1284,111,1,0,0,0,1285,1287,3,50,25,
        0,1286,1285,1,0,0,0,1286,1287,1,0,0,0,1287,1288,1,0,0,0,1288,1294,
        3,116,58,0,1289,1290,3,126,63,0,1290,1291,3,116,58,0,1291,1293,1,
        0,0,0,1292,1289,1,0,0,0,1293,1296,1,0,0,0,1294,1292,1,0,0,0,1294,
        1295,1,0,0,0,1295,1298,1,0,0,0,1296,1294,1,0,0,0,1297,1299,3,146,
        73,0,1298,1297,1,0,0,0,1298,1299,1,0,0,0,1299,1301,1,0,0,0,1300,
        1302,3,148,74,0,1301,1300,1,0,0,0,1301,1302,1,0,0,0,1302,113,1,0,
        0,0,1303,1311,3,118,59,0,1304,1305,3,122,61,0,1305,1307,3,118,59,
        0,1306,1308,3,124,62,0,1307,1306,1,0,0,0,1307,1308,1,0,0,0,1308,
        1310,1,0,0,0,1309,1304,1,0,0,0,1310,1313,1,0,0,0,1311,1309,1,0,0,
        0,1311,1312,1,0,0,0,1312,115,1,0,0,0,1313,1311,1,0,0,0,1314,1316,
        5,152,0,0,1315,1317,7,19,0,0,1316,1315,1,0,0,0,1316,1317,1,0,0,0,
        1317,1318,1,0,0,0,1318,1323,3,120,60,0,1319,1320,5,5,0,0,1320,1322,
        3,120,60,0,1321,1319,1,0,0,0,1322,1325,1,0,0,0,1323,1321,1,0,0,0,
        1323,1324,1,0,0,0,1324,1328,1,0,0,0,1325,1323,1,0,0,0,1326,1327,
        5,85,0,0,1327,1329,3,114,57,0,1328,1326,1,0,0,0,1328,1329,1,0,0,
        0,1329,1332,1,0,0,0,1330,1331,5,175,0,0,1331,1333,3,62,31,0,1332,
        1330,1,0,0,0,1332,1333,1,0,0,0,1333,1348,1,0,0,0,1334,1335,5,89,
        0,0,1335,1336,5,43,0,0,1336,1341,3,62,31,0,1337,1338,5,5,0,0,1338,
        1340,3,62,31,0,1339,1337,1,0,0,0,1340,1343,1,0,0,0,1341,1339,1,0,
        0,0,1341,1342,1,0,0,0,1342,1346,1,0,0,0,1343,1341,1,0,0,0,1344,1345,
        5,91,0,0,1345,1347,3,62,31,0,1346,1344,1,0,0,0,1346,1347,1,0,0,0,
        1347,1349,1,0,0,0,1348,1334,1,0,0,0,1348,1349,1,0,0,0,1349,1364,
        1,0,0,0,1350,1351,5,176,0,0,1351,1352,3,212,106,0,1352,1353,5,36,
        0,0,1353,1361,3,138,69,0,1354,1355,5,5,0,0,1355,1356,3,212,106,0,
        1356,1357,5,36,0,0,1357,1358,3,138,69,0,1358,1360,1,0,0,0,1359,1354,
        1,0,0,0,1360,1363,1,0,0,0,1361,1359,1,0,0,0,1361,1362,1,0,0,0,1362,
        1365,1,0,0,0,1363,1361,1,0,0,0,1364,1350,1,0,0,0,1364,1365,1,0,0,
        0,1365,1368,1,0,0,0,1366,1368,3,98,49,0,1367,1314,1,0,0,0,1367,1366,
        1,0,0,0,1368,117,1,0,0,0,1369,1370,3,180,90,0,1370,1371,5,2,0,0,
        1371,1373,1,0,0,0,1372,1369,1,0,0,0,1372,1373,1,0,0,0,1373,1374,
        1,0,0,0,1374,1378,3,182,91,0,1375,1376,5,36,0,0,1376,1379,3,208,
        104,0,1377,1379,3,210,105,0,1378,1375,1,0,0,0,1378,1377,1,0,0,0,
        1378,1379,1,0,0,0,1379,1385,1,0,0,0,1380,1381,5,97,0,0,1381,1382,
        5,43,0,0,1382,1386,3,196,98,0,1383,1384,5,116,0,0,1384,1386,5,97,
        0,0,1385,1380,1,0,0,0,1385,1383,1,0,0,0,1385,1386,1,0,0,0,1386,1423,
        1,0,0,0,1387,1388,3,180,90,0,1388,1389,5,2,0,0,1389,1391,1,0,0,0,
        1390,1387,1,0,0,0,1390,1391,1,0,0,0,1391,1392,1,0,0,0,1392,1393,
        3,218,109,0,1393,1394,5,3,0,0,1394,1399,3,62,31,0,1395,1396,5,5,
        0,0,1396,1398,3,62,31,0,1397,1395,1,0,0,0,1398,1401,1,0,0,0,1399,
        1397,1,0,0,0,1399,1400,1,0,0,0,1400,1402,1,0,0,0,1401,1399,1,0,0,
        0,1402,1407,5,4,0,0,1403,1405,5,36,0,0,1404,1403,1,0,0,0,1404,1405,
        1,0,0,0,1405,1406,1,0,0,0,1406,1408,3,208,104,0,1407,1404,1,0,0,
        0,1407,1408,1,0,0,0,1408,1423,1,0,0,0,1409,1410,5,3,0,0,1410,1411,
        3,114,57,0,1411,1412,5,4,0,0,1412,1423,1,0,0,0,1413,1414,5,3,0,0,
        1414,1415,3,112,56,0,1415,1420,5,4,0,0,1416,1418,5,36,0,0,1417,1416,
        1,0,0,0,1417,1418,1,0,0,0,1418,1419,1,0,0,0,1419,1421,3,208,104,
        0,1420,1417,1,0,0,0,1420,1421,1,0,0,0,1421,1423,1,0,0,0,1422,1372,
        1,0,0,0,1422,1390,1,0,0,0,1422,1409,1,0,0,0,1422,1413,1,0,0,0,1423,
        119,1,0,0,0,1424,1437,5,7,0,0,1425,1426,3,182,91,0,1426,1427,5,2,
        0,0,1427,1428,5,7,0,0,1428,1437,1,0,0,0,1429,1434,3,62,31,0,1430,
        1432,5,36,0,0,1431,1430,1,0,0,0,1431,1432,1,0,0,0,1432,1433,1,0,
        0,0,1433,1435,3,190,95,0,1434,1431,1,0,0,0,1434,1435,1,0,0,0,1435,
        1437,1,0,0,0,1436,1424,1,0,0,0,1436,1425,1,0,0,0,1436,1429,1,0,0,
        0,1437,121,1,0,0,0,1438,1452,5,5,0,0,1439,1441,5,114,0,0,1440,1439,
        1,0,0,0,1440,1441,1,0,0,0,1441,1448,1,0,0,0,1442,1444,7,20,0,0,1443,
        1445,5,127,0,0,1444,1443,1,0,0,0,1444,1445,1,0,0,0,1445,1449,1,0,
        0,0,1446,1449,5,99,0,0,1447,1449,5,54,0,0,1448,1442,1,0,0,0,1448,
        1446,1,0,0,0,1448,1447,1,0,0,0,1448,1449,1,0,0,0,1449,1450,1,0,0,
        0,1450,1452,5,106,0,0,1451,1438,1,0,0,0,1451,1440,1,0,0,0,1452,123,
        1,0,0,0,1453,1454,5,123,0,0,1454,1468,3,62,31,0,1455,1456,5,169,
        0,0,1456,1457,5,3,0,0,1457,1462,3,186,93,0,1458,1459,5,5,0,0,1459,
        1461,3,186,93,0,1460,1458,1,0,0,0,1461,1464,1,0,0,0,1462,1460,1,
        0,0,0,1462,1463,1,0,0,0,1463,1465,1,0,0,0,1464,1462,1,0,0,0,1465,
        1466,5,4,0,0,1466,1468,1,0,0,0,1467,1453,1,0,0,0,1467,1455,1,0,0,
        0,1468,125,1,0,0,0,1469,1471,5,166,0,0,1470,1472,5,31,0,0,1471,1470,
        1,0,0,0,1471,1472,1,0,0,0,1472,1476,1,0,0,0,1473,1476,5,102,0,0,
        1474,1476,5,73,0,0,1475,1469,1,0,0,0,1475,1473,1,0,0,0,1475,1474,
        1,0,0,0,1476,127,1,0,0,0,1477,1479,3,50,25,0,1478,1477,1,0,0,0,1478,
        1479,1,0,0,0,1479,1480,1,0,0,0,1480,1483,5,168,0,0,1481,1482,5,124,
        0,0,1482,1484,7,8,0,0,1483,1481,1,0,0,0,1483,1484,1,0,0,0,1484,1485,
        1,0,0,0,1485,1486,3,132,66,0,1486,1489,5,153,0,0,1487,1490,3,186,
        93,0,1488,1490,3,130,65,0,1489,1487,1,0,0,0,1489,1488,1,0,0,0,1490,
        1491,1,0,0,0,1491,1492,5,6,0,0,1492,1503,3,62,31,0,1493,1496,5,5,
        0,0,1494,1497,3,186,93,0,1495,1497,3,130,65,0,1496,1494,1,0,0,0,
        1496,1495,1,0,0,0,1497,1498,1,0,0,0,1498,1499,5,6,0,0,1499,1500,
        3,62,31,0,1500,1502,1,0,0,0,1501,1493,1,0,0,0,1502,1505,1,0,0,0,
        1503,1501,1,0,0,0,1503,1504,1,0,0,0,1504,1508,1,0,0,0,1505,1503,
        1,0,0,0,1506,1507,5,85,0,0,1507,1509,3,114,57,0,1508,1506,1,0,0,
        0,1508,1509,1,0,0,0,1509,1512,1,0,0,0,1510,1511,5,175,0,0,1511,1513,
        3,62,31,0,1512,1510,1,0,0,0,1512,1513,1,0,0,0,1513,1515,1,0,0,0,
        1514,1516,3,102,51,0,1515,1514,1,0,0,0,1515,1516,1,0,0,0,1516,1518,
        1,0,0,0,1517,1519,3,146,73,0,1518,1517,1,0,0,0,1518,1519,1,0,0,0,
        1519,1521,1,0,0,0,1520,1522,3,148,74,0,1521,1520,1,0,0,0,1521,1522,
        1,0,0,0,1522,129,1,0,0,0,1523,1524,5,3,0,0,1524,1529,3,186,93,0,
        1525,1526,5,5,0,0,1526,1528,3,186,93,0,1527,1525,1,0,0,0,1528,1531,
        1,0,0,0,1529,1527,1,0,0,0,1529,1530,1,0,0,0,1530,1532,1,0,0,0,1531,
        1529,1,0,0,0,1532,1533,5,4,0,0,1533,131,1,0,0,0,1534,1535,3,180,
        90,0,1535,1536,5,2,0,0,1536,1538,1,0,0,0,1537,1534,1,0,0,0,1537,
        1538,1,0,0,0,1538,1539,1,0,0,0,1539,1542,3,182,91,0,1540,1541,5,
        36,0,0,1541,1543,3,214,107,0,1542,1540,1,0,0,0,1542,1543,1,0,0,0,
        1543,1549,1,0,0,0,1544,1545,5,97,0,0,1545,1546,5,43,0,0,1546,1550,
        3,196,98,0,1547,1548,5,116,0,0,1548,1550,5,97,0,0,1549,1544,1,0,
        0,0,1549,1547,1,0,0,0,1549,1550,1,0,0,0,1550,133,1,0,0,0,1551,1553,
        5,170,0,0,1552,1554,3,180,90,0,1553,1552,1,0,0,0,1553,1554,1,0,0,
        0,1554,1557,1,0,0,0,1555,1556,5,103,0,0,1556,1558,3,162,81,0,1557,
        1555,1,0,0,0,1557,1558,1,0,0,0,1558,135,1,0,0,0,1559,1560,5,80,0,
        0,1560,1561,5,3,0,0,1561,1562,5,175,0,0,1562,1563,3,62,31,0,1563,
        1564,5,4,0,0,1564,137,1,0,0,0,1565,1567,5,3,0,0,1566,1568,3,216,
        108,0,1567,1566,1,0,0,0,1567,1568,1,0,0,0,1568,1579,1,0,0,0,1569,
        1570,5,129,0,0,1570,1571,5,43,0,0,1571,1576,3,62,31,0,1572,1573,
        5,5,0,0,1573,1575,3,62,31,0,1574,1572,1,0,0,0,1575,1578,1,0,0,0,
        1576,1574,1,0,0,0,1576,1577,1,0,0,0,1577,1580,1,0,0,0,1578,1576,
        1,0,0,0,1579,1569,1,0,0,0,1579,1580,1,0,0,0,1580,1582,1,0,0,0,1581,
        1583,3,146,73,0,1582,1581,1,0,0,0,1582,1583,1,0,0,0,1583,1585,1,
        0,0,0,1584,1586,3,142,71,0,1585,1584,1,0,0,0,1585,1586,1,0,0,0,1586,
        1587,1,0,0,0,1587,1588,5,4,0,0,1588,139,1,0,0,0,1589,1614,5,128,
        0,0,1590,1615,3,212,106,0,1591,1593,5,3,0,0,1592,1594,3,216,108,
        0,1593,1592,1,0,0,0,1593,1594,1,0,0,0,1594,1605,1,0,0,0,1595,1596,
        5,129,0,0,1596,1597,5,43,0,0,1597,1602,3,62,31,0,1598,1599,5,5,0,
        0,1599,1601,3,62,31,0,1600,1598,1,0,0,0,1601,1604,1,0,0,0,1602,1600,
        1,0,0,0,1602,1603,1,0,0,0,1603,1606,1,0,0,0,1604,1602,1,0,0,0,1605,
        1595,1,0,0,0,1605,1606,1,0,0,0,1606,1608,1,0,0,0,1607,1609,3,146,
        73,0,1608,1607,1,0,0,0,1608,1609,1,0,0,0,1609,1611,1,0,0,0,1610,
        1612,3,142,71,0,1611,1610,1,0,0,0,1611,1612,1,0,0,0,1612,1613,1,
        0,0,0,1613,1615,5,4,0,0,1614,1590,1,0,0,0,1614,1591,1,0,0,0,1615,
        141,1,0,0,0,1616,1626,3,144,72,0,1617,1624,5,74,0,0,1618,1619,5,
        115,0,0,1619,1625,5,126,0,0,1620,1621,5,55,0,0,1621,1625,5,148,0,
        0,1622,1625,5,89,0,0,1623,1625,5,160,0,0,1624,1618,1,0,0,0,1624,
        1620,1,0,0,0,1624,1622,1,0,0,0,1624,1623,1,0,0,0,1625,1627,1,0,0,
        0,1626,1617,1,0,0,0,1626,1627,1,0,0,0,1627,143,1,0,0,0,1628,1635,
        7,21,0,0,1629,1636,3,158,79,0,1630,1631,5,42,0,0,1631,1632,3,154,
        77,0,1632,1633,5,35,0,0,1633,1634,3,156,78,0,1634,1636,1,0,0,0,1635,
        1629,1,0,0,0,1635,1630,1,0,0,0,1636,145,1,0,0,0,1637,1638,5,125,
        0,0,1638,1639,5,43,0,0,1639,1644,3,150,75,0,1640,1641,5,5,0,0,1641,
        1643,3,150,75,0,1642,1640,1,0,0,0,1643,1646,1,0,0,0,1644,1642,1,
        0,0,0,1644,1645,1,0,0,0,1645,147,1,0,0,0,1646,1644,1,0,0,0,1647,
        1648,5,111,0,0,1648,1651,3,62,31,0,1649,1650,7,22,0,0,1650,1652,
        3,62,31,0,1651,1649,1,0,0,0,1651,1652,1,0,0,0,1652,149,1,0,0,0,1653,
        1656,3,62,31,0,1654,1655,5,48,0,0,1655,1657,3,192,96,0,1656,1654,
        1,0,0,0,1656,1657,1,0,0,0,1657,1659,1,0,0,0,1658,1660,3,152,76,0,
        1659,1658,1,0,0,0,1659,1660,1,0,0,0,1660,1663,1,0,0,0,1661,1662,
        5,120,0,0,1662,1664,7,23,0,0,1663,1661,1,0,0,0,1663,1664,1,0,0,0,
        1664,151,1,0,0,0,1665,1666,7,24,0,0,1666,153,1,0,0,0,1667,1668,3,
        62,31,0,1668,1669,5,132,0,0,1669,1676,1,0,0,0,1670,1671,3,62,31,
        0,1671,1672,5,82,0,0,1672,1676,1,0,0,0,1673,1674,5,55,0,0,1674,1676,
        5,148,0,0,1675,1667,1,0,0,0,1675,1670,1,0,0,0,1675,1673,1,0,0,0,
        1676,155,1,0,0,0,1677,1678,3,62,31,0,1678,1679,5,132,0,0,1679,1686,
        1,0,0,0,1680,1681,3,62,31,0,1681,1682,5,82,0,0,1682,1686,1,0,0,0,
        1683,1684,5,55,0,0,1684,1686,5,148,0,0,1685,1677,1,0,0,0,1685,1680,
        1,0,0,0,1685,1683,1,0,0,0,1686,157,1,0,0,0,1687,1688,3,62,31,0,1688,
        1689,5,132,0,0,1689,1693,1,0,0,0,1690,1691,5,55,0,0,1691,1693,5,
        148,0,0,1692,1687,1,0,0,0,1692,1690,1,0,0,0,1693,159,1,0,0,0,1694,
        1695,3,62,31,0,1695,161,1,0,0,0,1696,1697,3,62,31,0,1697,163,1,0,
        0,0,1698,1700,3,166,83,0,1699,1698,1,0,0,0,1700,1703,1,0,0,0,1701,
        1699,1,0,0,0,1701,1702,1,0,0,0,1702,165,1,0,0,0,1703,1701,1,0,0,
        0,1704,1714,8,25,0,0,1705,1709,5,3,0,0,1706,1708,3,168,84,0,1707,
        1706,1,0,0,0,1708,1711,1,0,0,0,1709,1707,1,0,0,0,1709,1710,1,0,0,
        0,1710,1712,1,0,0,0,1711,1709,1,0,0,0,1712,1714,5,4,0,0,1713,1704,
        1,0,0,0,1713,1705,1,0,0,0,1714,167,1,0,0,0,1715,1725,8,26,0,0,1716,
        1720,5,3,0,0,1717,1719,3,168,84,0,1718,1717,1,0,0,0,1719,1722,1,
        0,0,0,1720,1718,1,0,0,0,1720,1721,1,0,0,0,1721,1723,1,0,0,0,1722,
        1720,1,0,0,0,1723,1725,5,4,0,0,1724,1715,1,0,0,0,1724,1716,1,0,0,
        0,1725,169,1,0,0,0,1726,1727,7,27,0,0,1727,171,1,0,0,0,1728,1729,
        7,28,0,0,1729,173,1,0,0,0,1730,1734,3,170,85,0,1731,1734,3,172,86,
        0,1732,1734,5,135,0,0,1733,1730,1,0,0,0,1733,1731,1,0,0,0,1733,1732,
        1,0,0,0,1734,175,1,0,0,0,1735,1736,3,226,113,0,1736,177,1,0,0,0,
        1737,1738,3,220,110,0,1738,179,1,0,0,0,1739,1740,3,226,113,0,1740,
        181,1,0,0,0,1741,1742,3,226,113,0,1742,183,1,0,0,0,1743,1744,3,226,
        113,0,1744,185,1,0,0,0,1745,1746,3,226,113,0,1746,187,1,0,0,0,1747,
        1748,3,224,112,0,1748,189,1,0,0,0,1749,1750,3,226,113,0,1750,191,
        1,0,0,0,1751,1752,3,226,113,0,1752,193,1,0,0,0,1753,1754,3,226,113,
        0,1754,195,1,0,0,0,1755,1756,3,226,113,0,1756,197,1,0,0,0,1757,1758,
        3,226,113,0,1758,199,1,0,0,0,1759,1760,3,226,113,0,1760,201,1,0,
        0,0,1761,1762,3,226,113,0,1762,203,1,0,0,0,1763,1764,3,226,113,0,
        1764,205,1,0,0,0,1765,1766,3,226,113,0,1766,207,1,0,0,0,1767,1768,
        3,226,113,0,1768,209,1,0,0,0,1769,1770,3,222,111,0,1770,211,1,0,
        0,0,1771,1772,3,226,113,0,1772,213,1,0,0,0,1773,1774,3,226,113,0,
        1774,215,1,0,0,0,1775,1776,3,226,113,0,1776,217,1,0,0,0,1777,1778,
        3,226,113,0,1778,219,1,0,0,0,1779,1784,5,180,0,0,1780,1784,3,170,
        85,0,1781,1784,3,172,86,0,1782,1784,5,183,0,0,1783,1779,1,0,0,0,
        1783,1780,1,0,0,0,1783,1781,1,0,0,0,1783,1782,1,0,0,0,1784,221,1,
        0,0,0,1785,1790,5,180,0,0,1786,1790,3,170,85,0,1787,1790,5,135,0,
        0,1788,1790,5,183,0,0,1789,1785,1,0,0,0,1789,1786,1,0,0,0,1789,1787,
        1,0,0,0,1789,1788,1,0,0,0,1790,223,1,0,0,0,1791,1794,5,180,0,0,1792,
        1794,3,174,87,0,1793,1791,1,0,0,0,1793,1792,1,0,0,0,1794,225,1,0,
        0,0,1795,1799,5,180,0,0,1796,1799,3,174,87,0,1797,1799,5,183,0,0,
        1798,1795,1,0,0,0,1798,1796,1,0,0,0,1798,1797,1,0,0,0,1799,227,1,
        0,0,0,263,232,236,240,246,248,272,279,286,292,296,301,304,311,314,
        318,326,329,333,337,341,344,351,357,363,368,379,385,390,393,397,
        403,408,417,424,429,433,438,444,448,453,458,464,476,480,485,488,
        491,494,498,501,515,522,529,531,534,540,545,553,558,573,579,589,
        594,604,608,610,614,619,621,629,635,640,647,658,661,663,670,674,
        681,687,693,699,704,713,718,729,734,745,750,754,761,767,770,783,
        788,791,798,801,804,807,811,819,824,833,840,844,847,851,854,857,
        865,879,888,892,897,904,912,918,928,932,936,944,954,957,963,969,
        978,981,985,988,994,998,1004,1006,1014,1022,1030,1038,1046,1054,
        1060,1070,1078,1081,1088,1096,1116,1127,1131,1138,1144,1149,1157,
        1162,1168,1173,1176,1182,1185,1187,1193,1196,1198,1202,1213,1219,
        1221,1229,1236,1243,1248,1250,1256,1265,1270,1277,1281,1283,1286,
        1294,1298,1301,1307,1311,1316,1323,1328,1332,1341,1346,1348,1361,
        1364,1367,1372,1378,1385,1390,1399,1404,1407,1417,1420,1422,1431,
        1434,1436,1440,1444,1448,1451,1462,1467,1471,1475,1478,1483,1489,
        1496,1503,1508,1512,1515,1518,1521,1529,1537,1542,1549,1553,1557,
        1567,1576,1579,1582,1585,1593,1602,1605,1608,1611,1614,1624,1626,
        1635,1644,1651,1656,1659,1663,1675,1685,1692,1701,1709,1713,1720,
        1724,1733,1783,1789,1793,1798
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SQLiteParser.__ATN) {
            SQLiteParser.__ATN = new antlr.ATNDeserializer().deserialize(SQLiteParser._serializedATN);
        }

        return SQLiteParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SQLiteParser.literalNames, SQLiteParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SQLiteParser.vocabulary;
    }

    private static readonly decisionsToDFA = SQLiteParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ParseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sql_stmt_list(): Sql_stmt_listContext {
        return this.getRuleContext(0, Sql_stmt_listContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_parse;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterParse) {
             listener.enterParse(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitParse) {
             listener.exitParse(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitParse) {
            return visitor.visitParse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Sql_stmt_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sql_stmt(): Sql_stmtContext[];
    public sql_stmt(i: number): Sql_stmtContext | null;
    public sql_stmt(i?: number): Sql_stmtContext[] | Sql_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Sql_stmtContext);
        }

        return this.getRuleContext(i, Sql_stmtContext);
    }
    public SCOL(): antlr.TerminalNode[];
    public SCOL(i: number): antlr.TerminalNode | null;
    public SCOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.SCOL);
    	} else {
    		return this.getToken(SQLiteParser.SCOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_sql_stmt_list;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSql_stmt_list) {
             listener.enterSql_stmt_list(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSql_stmt_list) {
             listener.exitSql_stmt_list(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSql_stmt_list) {
            return visitor.visitSql_stmt_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Sql_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public alter_table_stmt(): Alter_table_stmtContext | null {
        return this.getRuleContext(0, Alter_table_stmtContext);
    }
    public analyze_stmt(): Analyze_stmtContext | null {
        return this.getRuleContext(0, Analyze_stmtContext);
    }
    public attach_stmt(): Attach_stmtContext | null {
        return this.getRuleContext(0, Attach_stmtContext);
    }
    public begin_stmt(): Begin_stmtContext | null {
        return this.getRuleContext(0, Begin_stmtContext);
    }
    public commit_stmt(): Commit_stmtContext | null {
        return this.getRuleContext(0, Commit_stmtContext);
    }
    public create_index_stmt(): Create_index_stmtContext | null {
        return this.getRuleContext(0, Create_index_stmtContext);
    }
    public create_table_stmt(): Create_table_stmtContext | null {
        return this.getRuleContext(0, Create_table_stmtContext);
    }
    public create_trigger_stmt(): Create_trigger_stmtContext | null {
        return this.getRuleContext(0, Create_trigger_stmtContext);
    }
    public create_view_stmt(): Create_view_stmtContext | null {
        return this.getRuleContext(0, Create_view_stmtContext);
    }
    public create_virtual_table_stmt(): Create_virtual_table_stmtContext | null {
        return this.getRuleContext(0, Create_virtual_table_stmtContext);
    }
    public delete_stmt(): Delete_stmtContext | null {
        return this.getRuleContext(0, Delete_stmtContext);
    }
    public detach_stmt(): Detach_stmtContext | null {
        return this.getRuleContext(0, Detach_stmtContext);
    }
    public drop_stmt(): Drop_stmtContext | null {
        return this.getRuleContext(0, Drop_stmtContext);
    }
    public insert_stmt(): Insert_stmtContext | null {
        return this.getRuleContext(0, Insert_stmtContext);
    }
    public pragma_stmt(): Pragma_stmtContext | null {
        return this.getRuleContext(0, Pragma_stmtContext);
    }
    public reindex_stmt(): Reindex_stmtContext | null {
        return this.getRuleContext(0, Reindex_stmtContext);
    }
    public release_stmt(): Release_stmtContext | null {
        return this.getRuleContext(0, Release_stmtContext);
    }
    public rollback_stmt(): Rollback_stmtContext | null {
        return this.getRuleContext(0, Rollback_stmtContext);
    }
    public savepoint_stmt(): Savepoint_stmtContext | null {
        return this.getRuleContext(0, Savepoint_stmtContext);
    }
    public select_stmt(): Select_stmtContext | null {
        return this.getRuleContext(0, Select_stmtContext);
    }
    public update_stmt(): Update_stmtContext | null {
        return this.getRuleContext(0, Update_stmtContext);
    }
    public vacuum_stmt(): Vacuum_stmtContext | null {
        return this.getRuleContext(0, Vacuum_stmtContext);
    }
    public EXPLAIN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXPLAIN_, 0);
    }
    public QUERY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.QUERY_, 0);
    }
    public PLAN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PLAN_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_sql_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSql_stmt) {
             listener.enterSql_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSql_stmt) {
             listener.exitSql_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSql_stmt) {
            return visitor.visitSql_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Alter_table_stmtContext extends antlr.ParserRuleContext {
    public _new_table_name?: Table_nameContext;
    public _old_column_name?: Column_nameContext;
    public _new_column_name?: Column_nameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALTER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ALTER_, 0)!;
    }
    public TABLE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.TABLE_, 0)!;
    }
    public table_name(): Table_nameContext[];
    public table_name(i: number): Table_nameContext | null;
    public table_name(i?: number): Table_nameContext[] | Table_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Table_nameContext);
        }

        return this.getRuleContext(i, Table_nameContext);
    }
    public RENAME_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RENAME_, 0);
    }
    public ADD_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ADD_, 0);
    }
    public column_def(): Column_defContext | null {
        return this.getRuleContext(0, Column_defContext);
    }
    public DROP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DROP_, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public TO_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TO_, 0);
    }
    public COLUMN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COLUMN_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_alter_table_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAlter_table_stmt) {
             listener.enterAlter_table_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAlter_table_stmt) {
             listener.exitAlter_table_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAlter_table_stmt) {
            return visitor.visitAlter_table_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Analyze_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ANALYZE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ANALYZE_, 0)!;
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public table_or_index_name(): Table_or_index_nameContext | null {
        return this.getRuleContext(0, Table_or_index_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_analyze_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAnalyze_stmt) {
             listener.enterAnalyze_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAnalyze_stmt) {
             listener.exitAnalyze_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAnalyze_stmt) {
            return visitor.visitAnalyze_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Attach_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ATTACH_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ATTACH_, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public AS_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.AS_, 0)!;
    }
    public schema_name(): Schema_nameContext {
        return this.getRuleContext(0, Schema_nameContext)!;
    }
    public DATABASE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DATABASE_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_attach_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAttach_stmt) {
             listener.enterAttach_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAttach_stmt) {
             listener.exitAttach_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAttach_stmt) {
            return visitor.visitAttach_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Begin_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BEGIN_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.BEGIN_, 0)!;
    }
    public TRANSACTION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRANSACTION_, 0);
    }
    public DEFERRED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DEFERRED_, 0);
    }
    public IMMEDIATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IMMEDIATE_, 0);
    }
    public EXCLUSIVE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXCLUSIVE_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_begin_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterBegin_stmt) {
             listener.enterBegin_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitBegin_stmt) {
             listener.exitBegin_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitBegin_stmt) {
            return visitor.visitBegin_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Commit_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMMIT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COMMIT_, 0);
    }
    public END_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.END_, 0);
    }
    public TRANSACTION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRANSACTION_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_commit_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCommit_stmt) {
             listener.enterCommit_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCommit_stmt) {
             listener.exitCommit_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCommit_stmt) {
            return visitor.visitCommit_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Rollback_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ROLLBACK_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ROLLBACK_, 0)!;
    }
    public TRANSACTION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRANSACTION_, 0);
    }
    public TO_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TO_, 0);
    }
    public savepoint_name(): Savepoint_nameContext | null {
        return this.getRuleContext(0, Savepoint_nameContext);
    }
    public SAVEPOINT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.SAVEPOINT_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_rollback_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterRollback_stmt) {
             listener.enterRollback_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitRollback_stmt) {
             listener.exitRollback_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitRollback_stmt) {
            return visitor.visitRollback_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Savepoint_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SAVEPOINT_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.SAVEPOINT_, 0)!;
    }
    public savepoint_name(): Savepoint_nameContext {
        return this.getRuleContext(0, Savepoint_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_savepoint_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSavepoint_stmt) {
             listener.enterSavepoint_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSavepoint_stmt) {
             listener.exitSavepoint_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSavepoint_stmt) {
            return visitor.visitSavepoint_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Release_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RELEASE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.RELEASE_, 0)!;
    }
    public savepoint_name(): Savepoint_nameContext {
        return this.getRuleContext(0, Savepoint_nameContext)!;
    }
    public SAVEPOINT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.SAVEPOINT_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_release_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterRelease_stmt) {
             listener.enterRelease_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitRelease_stmt) {
             listener.exitRelease_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitRelease_stmt) {
            return visitor.visitRelease_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Create_index_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CREATE_, 0)!;
    }
    public INDEX_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.INDEX_, 0)!;
    }
    public index_name(): Index_nameContext {
        return this.getRuleContext(0, Index_nameContext)!;
    }
    public ON_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ON_, 0)!;
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public indexed_column(): Indexed_columnContext[];
    public indexed_column(i: number): Indexed_columnContext | null;
    public indexed_column(i?: number): Indexed_columnContext[] | Indexed_columnContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Indexed_columnContext);
        }

        return this.getRuleContext(i, Indexed_columnContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public UNIQUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNIQUE_, 0);
    }
    public IF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public WHERE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_create_index_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCreate_index_stmt) {
             listener.enterCreate_index_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCreate_index_stmt) {
             listener.exitCreate_index_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCreate_index_stmt) {
            return visitor.visitCreate_index_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Indexed_columnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public COLLATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COLLATE_, 0);
    }
    public collation_name(): Collation_nameContext | null {
        return this.getRuleContext(0, Collation_nameContext);
    }
    public asc_desc(): Asc_descContext | null {
        return this.getRuleContext(0, Asc_descContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_indexed_column;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterIndexed_column) {
             listener.enterIndexed_column(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitIndexed_column) {
             listener.exitIndexed_column(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitIndexed_column) {
            return visitor.visitIndexed_column(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Create_table_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CREATE_, 0)!;
    }
    public TABLE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.TABLE_, 0)!;
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public column_def(): Column_defContext[];
    public column_def(i: number): Column_defContext | null;
    public column_def(i?: number): Column_defContext[] | Column_defContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_defContext);
        }

        return this.getRuleContext(i, Column_defContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public select_stmt(): Select_stmtContext | null {
        return this.getRuleContext(0, Select_stmtContext);
    }
    public IF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public TEMP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMP_, 0);
    }
    public TEMPORARY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMPORARY_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public table_constraint(): Table_constraintContext[];
    public table_constraint(i: number): Table_constraintContext | null;
    public table_constraint(i?: number): Table_constraintContext[] | Table_constraintContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Table_constraintContext);
        }

        return this.getRuleContext(i, Table_constraintContext);
    }
    public table_options(): Table_optionsContext | null {
        return this.getRuleContext(0, Table_optionsContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_create_table_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCreate_table_stmt) {
             listener.enterCreate_table_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCreate_table_stmt) {
             listener.exitCreate_table_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCreate_table_stmt) {
            return visitor.visitCreate_table_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Table_optionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WITHOUT_(): antlr.TerminalNode[];
    public WITHOUT_(i: number): antlr.TerminalNode | null;
    public WITHOUT_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.WITHOUT_);
    	} else {
    		return this.getToken(SQLiteParser.WITHOUT_, i);
    	}
    }
    public ROWID_(): antlr.TerminalNode[];
    public ROWID_(i: number): antlr.TerminalNode | null;
    public ROWID_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.ROWID_);
    	} else {
    		return this.getToken(SQLiteParser.ROWID_, i);
    	}
    }
    public STRICT_(): antlr.TerminalNode[];
    public STRICT_(i: number): antlr.TerminalNode | null;
    public STRICT_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.STRICT_);
    	} else {
    		return this.getToken(SQLiteParser.STRICT_, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_table_options;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTable_options) {
             listener.enterTable_options(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTable_options) {
             listener.exitTable_options(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTable_options) {
            return visitor.visitTable_options(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Column_defContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public column_name(): Column_nameContext {
        return this.getRuleContext(0, Column_nameContext)!;
    }
    public type_name(): Type_nameContext | null {
        return this.getRuleContext(0, Type_nameContext);
    }
    public column_constraint(): Column_constraintContext[];
    public column_constraint(i: number): Column_constraintContext | null;
    public column_constraint(i?: number): Column_constraintContext[] | Column_constraintContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_constraintContext);
        }

        return this.getRuleContext(i, Column_constraintContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_column_def;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterColumn_def) {
             listener.enterColumn_def(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitColumn_def) {
             listener.exitColumn_def(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitColumn_def) {
            return visitor.visitColumn_def(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Type_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext[];
    public name(i: number): NameContext | null;
    public name(i?: number): NameContext[] | NameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }

        return this.getRuleContext(i, NameContext);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public signed_number(): Signed_numberContext[];
    public signed_number(i: number): Signed_numberContext | null;
    public signed_number(i?: number): Signed_numberContext[] | Signed_numberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Signed_numberContext);
        }

        return this.getRuleContext(i, Signed_numberContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_type_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterType_name) {
             listener.enterType_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitType_name) {
             listener.exitType_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitType_name) {
            return visitor.visitType_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Column_constraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PRIMARY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRIMARY_, 0);
    }
    public KEY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.KEY_, 0);
    }
    public CHECK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CHECK_, 0);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public DEFAULT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DEFAULT_, 0);
    }
    public COLLATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COLLATE_, 0);
    }
    public collation_name(): Collation_nameContext | null {
        return this.getRuleContext(0, Collation_nameContext);
    }
    public foreign_key_clause(): Foreign_key_clauseContext | null {
        return this.getRuleContext(0, Foreign_key_clauseContext);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public CONSTRAINT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CONSTRAINT_, 0);
    }
    public name(): NameContext | null {
        return this.getRuleContext(0, NameContext);
    }
    public NULL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NULL_, 0);
    }
    public UNIQUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNIQUE_, 0);
    }
    public signed_number(): Signed_numberContext | null {
        return this.getRuleContext(0, Signed_numberContext);
    }
    public literal_value(): Literal_valueContext | null {
        return this.getRuleContext(0, Literal_valueContext);
    }
    public asc_desc(): Asc_descContext | null {
        return this.getRuleContext(0, Asc_descContext);
    }
    public conflict_clause(): Conflict_clauseContext | null {
        return this.getRuleContext(0, Conflict_clauseContext);
    }
    public AUTOINCREMENT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AUTOINCREMENT_, 0);
    }
    public GENERATED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GENERATED_, 0);
    }
    public ALWAYS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ALWAYS_, 0);
    }
    public STORED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STORED_, 0);
    }
    public VIRTUAL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.VIRTUAL_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_column_constraint;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterColumn_constraint) {
             listener.enterColumn_constraint(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitColumn_constraint) {
             listener.exitColumn_constraint(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitColumn_constraint) {
            return visitor.visitColumn_constraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Signed_numberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMERIC_LITERAL(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.NUMERIC_LITERAL, 0)!;
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_signed_number;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSigned_number) {
             listener.enterSigned_number(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSigned_number) {
             listener.exitSigned_number(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSigned_number) {
            return visitor.visitSigned_number(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Table_constraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public indexed_column(): Indexed_columnContext[];
    public indexed_column(i: number): Indexed_columnContext | null;
    public indexed_column(i?: number): Indexed_columnContext[] | Indexed_columnContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Indexed_columnContext);
        }

        return this.getRuleContext(i, Indexed_columnContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public CHECK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CHECK_, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public FOREIGN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FOREIGN_, 0);
    }
    public KEY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.KEY_, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public foreign_key_clause(): Foreign_key_clauseContext | null {
        return this.getRuleContext(0, Foreign_key_clauseContext);
    }
    public CONSTRAINT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CONSTRAINT_, 0);
    }
    public name(): NameContext | null {
        return this.getRuleContext(0, NameContext);
    }
    public PRIMARY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRIMARY_, 0);
    }
    public UNIQUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNIQUE_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public conflict_clause(): Conflict_clauseContext | null {
        return this.getRuleContext(0, Conflict_clauseContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_table_constraint;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTable_constraint) {
             listener.enterTable_constraint(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTable_constraint) {
             listener.exitTable_constraint(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTable_constraint) {
            return visitor.visitTable_constraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Foreign_key_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REFERENCES_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.REFERENCES_, 0)!;
    }
    public foreign_table(): Foreign_tableContext {
        return this.getRuleContext(0, Foreign_tableContext)!;
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public ON_(): antlr.TerminalNode[];
    public ON_(i: number): antlr.TerminalNode | null;
    public ON_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.ON_);
    	} else {
    		return this.getToken(SQLiteParser.ON_, i);
    	}
    }
    public MATCH_(): antlr.TerminalNode[];
    public MATCH_(i: number): antlr.TerminalNode | null;
    public MATCH_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.MATCH_);
    	} else {
    		return this.getToken(SQLiteParser.MATCH_, i);
    	}
    }
    public name(): NameContext[];
    public name(i: number): NameContext | null;
    public name(i?: number): NameContext[] | NameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }

        return this.getRuleContext(i, NameContext);
    }
    public DEFERRABLE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DEFERRABLE_, 0);
    }
    public DELETE_(): antlr.TerminalNode[];
    public DELETE_(i: number): antlr.TerminalNode | null;
    public DELETE_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.DELETE_);
    	} else {
    		return this.getToken(SQLiteParser.DELETE_, i);
    	}
    }
    public UPDATE_(): antlr.TerminalNode[];
    public UPDATE_(i: number): antlr.TerminalNode | null;
    public UPDATE_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.UPDATE_);
    	} else {
    		return this.getToken(SQLiteParser.UPDATE_, i);
    	}
    }
    public SET_(): antlr.TerminalNode[];
    public SET_(i: number): antlr.TerminalNode | null;
    public SET_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.SET_);
    	} else {
    		return this.getToken(SQLiteParser.SET_, i);
    	}
    }
    public CASCADE_(): antlr.TerminalNode[];
    public CASCADE_(i: number): antlr.TerminalNode | null;
    public CASCADE_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.CASCADE_);
    	} else {
    		return this.getToken(SQLiteParser.CASCADE_, i);
    	}
    }
    public RESTRICT_(): antlr.TerminalNode[];
    public RESTRICT_(i: number): antlr.TerminalNode | null;
    public RESTRICT_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.RESTRICT_);
    	} else {
    		return this.getToken(SQLiteParser.RESTRICT_, i);
    	}
    }
    public NO_(): antlr.TerminalNode[];
    public NO_(i: number): antlr.TerminalNode | null;
    public NO_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.NO_);
    	} else {
    		return this.getToken(SQLiteParser.NO_, i);
    	}
    }
    public ACTION_(): antlr.TerminalNode[];
    public ACTION_(i: number): antlr.TerminalNode | null;
    public ACTION_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.ACTION_);
    	} else {
    		return this.getToken(SQLiteParser.ACTION_, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public NULL_(): antlr.TerminalNode[];
    public NULL_(i: number): antlr.TerminalNode | null;
    public NULL_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.NULL_);
    	} else {
    		return this.getToken(SQLiteParser.NULL_, i);
    	}
    }
    public DEFAULT_(): antlr.TerminalNode[];
    public DEFAULT_(i: number): antlr.TerminalNode | null;
    public DEFAULT_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.DEFAULT_);
    	} else {
    		return this.getToken(SQLiteParser.DEFAULT_, i);
    	}
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public INITIALLY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INITIALLY_, 0);
    }
    public DEFERRED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DEFERRED_, 0);
    }
    public IMMEDIATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IMMEDIATE_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_foreign_key_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterForeign_key_clause) {
             listener.enterForeign_key_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitForeign_key_clause) {
             listener.exitForeign_key_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitForeign_key_clause) {
            return visitor.visitForeign_key_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Conflict_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ON_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ON_, 0)!;
    }
    public CONFLICT_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CONFLICT_, 0)!;
    }
    public ROLLBACK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    public ABORT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    public FAIL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    public IGNORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    public REPLACE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REPLACE_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_conflict_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterConflict_clause) {
             listener.enterConflict_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitConflict_clause) {
             listener.exitConflict_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitConflict_clause) {
            return visitor.visitConflict_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Create_trigger_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CREATE_, 0)!;
    }
    public TRIGGER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.TRIGGER_, 0)!;
    }
    public trigger_name(): Trigger_nameContext {
        return this.getRuleContext(0, Trigger_nameContext)!;
    }
    public ON_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ON_, 0)!;
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public BEGIN_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.BEGIN_, 0)!;
    }
    public END_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.END_, 0)!;
    }
    public DELETE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DELETE_, 0);
    }
    public INSERT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INSERT_, 0);
    }
    public UPDATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UPDATE_, 0);
    }
    public IF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public BEFORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BEFORE_, 0);
    }
    public AFTER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AFTER_, 0);
    }
    public INSTEAD_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INSTEAD_, 0);
    }
    public OF_(): antlr.TerminalNode[];
    public OF_(i: number): antlr.TerminalNode | null;
    public OF_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.OF_);
    	} else {
    		return this.getToken(SQLiteParser.OF_, i);
    	}
    }
    public FOR_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FOR_, 0);
    }
    public EACH_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EACH_, 0);
    }
    public ROW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    public WHEN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WHEN_, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public SCOL(): antlr.TerminalNode[];
    public SCOL(i: number): antlr.TerminalNode | null;
    public SCOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.SCOL);
    	} else {
    		return this.getToken(SQLiteParser.SCOL, i);
    	}
    }
    public TEMP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMP_, 0);
    }
    public TEMPORARY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMPORARY_, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public update_stmt(): Update_stmtContext[];
    public update_stmt(i: number): Update_stmtContext | null;
    public update_stmt(i?: number): Update_stmtContext[] | Update_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Update_stmtContext);
        }

        return this.getRuleContext(i, Update_stmtContext);
    }
    public insert_stmt(): Insert_stmtContext[];
    public insert_stmt(i: number): Insert_stmtContext | null;
    public insert_stmt(i?: number): Insert_stmtContext[] | Insert_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Insert_stmtContext);
        }

        return this.getRuleContext(i, Insert_stmtContext);
    }
    public delete_stmt(): Delete_stmtContext[];
    public delete_stmt(i: number): Delete_stmtContext | null;
    public delete_stmt(i?: number): Delete_stmtContext[] | Delete_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Delete_stmtContext);
        }

        return this.getRuleContext(i, Delete_stmtContext);
    }
    public select_stmt(): Select_stmtContext[];
    public select_stmt(i: number): Select_stmtContext | null;
    public select_stmt(i?: number): Select_stmtContext[] | Select_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Select_stmtContext);
        }

        return this.getRuleContext(i, Select_stmtContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_create_trigger_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCreate_trigger_stmt) {
             listener.enterCreate_trigger_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCreate_trigger_stmt) {
             listener.exitCreate_trigger_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCreate_trigger_stmt) {
            return visitor.visitCreate_trigger_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Create_view_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CREATE_, 0)!;
    }
    public VIEW_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.VIEW_, 0)!;
    }
    public view_name(): View_nameContext {
        return this.getRuleContext(0, View_nameContext)!;
    }
    public AS_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.AS_, 0)!;
    }
    public select_stmt(): Select_stmtContext {
        return this.getRuleContext(0, Select_stmtContext)!;
    }
    public IF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public TEMP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMP_, 0);
    }
    public TEMPORARY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMPORARY_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_create_view_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCreate_view_stmt) {
             listener.enterCreate_view_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCreate_view_stmt) {
             listener.exitCreate_view_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCreate_view_stmt) {
            return visitor.visitCreate_view_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Create_virtual_table_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CREATE_, 0)!;
    }
    public VIRTUAL_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.VIRTUAL_, 0)!;
    }
    public TABLE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.TABLE_, 0)!;
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public USING_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.USING_, 0)!;
    }
    public module_name(): Module_nameContext {
        return this.getRuleContext(0, Module_nameContext)!;
    }
    public IF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public module_argument(): Module_argumentContext[];
    public module_argument(i: number): Module_argumentContext | null;
    public module_argument(i?: number): Module_argumentContext[] | Module_argumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Module_argumentContext);
        }

        return this.getRuleContext(i, Module_argumentContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_create_virtual_table_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCreate_virtual_table_stmt) {
             listener.enterCreate_virtual_table_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCreate_virtual_table_stmt) {
             listener.exitCreate_virtual_table_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCreate_virtual_table_stmt) {
            return visitor.visitCreate_virtual_table_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class With_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WITH_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.WITH_, 0)!;
    }
    public common_table_expression(): Common_table_expressionContext[];
    public common_table_expression(i: number): Common_table_expressionContext | null;
    public common_table_expression(i?: number): Common_table_expressionContext[] | Common_table_expressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Common_table_expressionContext);
        }

        return this.getRuleContext(i, Common_table_expressionContext);
    }
    public RECURSIVE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RECURSIVE_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_with_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterWith_clause) {
             listener.enterWith_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitWith_clause) {
             listener.exitWith_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitWith_clause) {
            return visitor.visitWith_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Common_table_expressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public cte_table_name(): Cte_table_nameContext {
        return this.getRuleContext(0, Cte_table_nameContext)!;
    }
    public AS_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.AS_, 0)!;
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public select_stmt(): Select_stmtContext {
        return this.getRuleContext(0, Select_stmtContext)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public MATERIALIZED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.MATERIALIZED_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_common_table_expression;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCommon_table_expression) {
             listener.enterCommon_table_expression(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCommon_table_expression) {
             listener.exitCommon_table_expression(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCommon_table_expression) {
            return visitor.visitCommon_table_expression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cte_table_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_cte_table_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCte_table_name) {
             listener.enterCte_table_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCte_table_name) {
             listener.exitCte_table_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCte_table_name) {
            return visitor.visitCte_table_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Delete_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DELETE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.DELETE_, 0)!;
    }
    public FROM_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.FROM_, 0)!;
    }
    public qualified_table_name(): Qualified_table_nameContext {
        return this.getRuleContext(0, Qualified_table_nameContext)!;
    }
    public with_clause(): With_clauseContext | null {
        return this.getRuleContext(0, With_clauseContext);
    }
    public WHERE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public returning_clause(): Returning_clauseContext | null {
        return this.getRuleContext(0, Returning_clauseContext);
    }
    public order_clause(): Order_clauseContext | null {
        return this.getRuleContext(0, Order_clauseContext);
    }
    public limit_clause(): Limit_clauseContext | null {
        return this.getRuleContext(0, Limit_clauseContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_delete_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterDelete_stmt) {
             listener.enterDelete_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitDelete_stmt) {
             listener.exitDelete_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitDelete_stmt) {
            return visitor.visitDelete_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Detach_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DETACH_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.DETACH_, 0)!;
    }
    public schema_name(): Schema_nameContext {
        return this.getRuleContext(0, Schema_nameContext)!;
    }
    public DATABASE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DATABASE_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_detach_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterDetach_stmt) {
             listener.enterDetach_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitDetach_stmt) {
             listener.exitDetach_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitDetach_stmt) {
            return visitor.visitDetach_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Drop_stmtContext extends antlr.ParserRuleContext {
    public _object?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DROP_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.DROP_, 0)!;
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public INDEX_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INDEX_, 0);
    }
    public TABLE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TABLE_, 0);
    }
    public TRIGGER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRIGGER_, 0);
    }
    public VIEW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.VIEW_, 0);
    }
    public IF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_drop_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterDrop_stmt) {
             listener.enterDrop_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitDrop_stmt) {
             listener.exitDrop_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitDrop_stmt) {
            return visitor.visitDrop_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr_recursive(): Expr_recursiveContext {
        return this.getRuleContext(0, Expr_recursiveContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr) {
             listener.enterExpr(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr) {
             listener.exitExpr(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_recursiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public function_name(): Function_nameContext | null {
        return this.getRuleContext(0, Function_nameContext);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STAR, 0);
    }
    public percentile_clause(): Percentile_clauseContext | null {
        return this.getRuleContext(0, Percentile_clauseContext);
    }
    public filter_clause(): Filter_clauseContext | null {
        return this.getRuleContext(0, Filter_clauseContext);
    }
    public over_clause(): Over_clauseContext | null {
        return this.getRuleContext(0, Over_clauseContext);
    }
    public DISTINCT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DISTINCT_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public order_clause(): Order_clauseContext | null {
        return this.getRuleContext(0, Order_clauseContext);
    }
    public CAST_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CAST_, 0);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public type_name(): Type_nameContext | null {
        return this.getRuleContext(0, Type_nameContext);
    }
    public CASE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CASE_, 0);
    }
    public END_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.END_, 0);
    }
    public WHEN_(): antlr.TerminalNode[];
    public WHEN_(i: number): antlr.TerminalNode | null;
    public WHEN_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.WHEN_);
    	} else {
    		return this.getToken(SQLiteParser.WHEN_, i);
    	}
    }
    public THEN_(): antlr.TerminalNode[];
    public THEN_(i: number): antlr.TerminalNode | null;
    public THEN_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.THEN_);
    	} else {
    		return this.getToken(SQLiteParser.THEN_, i);
    	}
    }
    public ELSE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ELSE_, 0);
    }
    public expr_or(): Expr_orContext | null {
        return this.getRuleContext(0, Expr_orContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr_recursive;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr_recursive) {
             listener.enterExpr_recursive(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr_recursive) {
             listener.exitExpr_recursive(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_recursive) {
            return visitor.visitExpr_recursive(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_orContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr_and(): Expr_andContext[];
    public expr_and(i: number): Expr_andContext | null;
    public expr_and(i?: number): Expr_andContext[] | Expr_andContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Expr_andContext);
        }

        return this.getRuleContext(i, Expr_andContext);
    }
    public OR_(): antlr.TerminalNode[];
    public OR_(i: number): antlr.TerminalNode | null;
    public OR_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.OR_);
    	} else {
    		return this.getToken(SQLiteParser.OR_, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr_or;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr_or) {
             listener.enterExpr_or(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr_or) {
             listener.exitExpr_or(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_or) {
            return visitor.visitExpr_or(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_andContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr_not(): Expr_notContext[];
    public expr_not(i: number): Expr_notContext | null;
    public expr_not(i?: number): Expr_notContext[] | Expr_notContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Expr_notContext);
        }

        return this.getRuleContext(i, Expr_notContext);
    }
    public AND_(): antlr.TerminalNode[];
    public AND_(i: number): antlr.TerminalNode | null;
    public AND_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.AND_);
    	} else {
    		return this.getToken(SQLiteParser.AND_, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr_and;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr_and) {
             listener.enterExpr_and(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr_and) {
             listener.exitExpr_and(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_and) {
            return visitor.visitExpr_and(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_notContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr_binary(): Expr_binaryContext {
        return this.getRuleContext(0, Expr_binaryContext)!;
    }
    public NOT_(): antlr.TerminalNode[];
    public NOT_(i: number): antlr.TerminalNode | null;
    public NOT_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.NOT_);
    	} else {
    		return this.getToken(SQLiteParser.NOT_, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr_not;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr_not) {
             listener.enterExpr_not(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr_not) {
             listener.exitExpr_not(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_not) {
            return visitor.visitExpr_not(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_binaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr_comparison(): Expr_comparisonContext[];
    public expr_comparison(i: number): Expr_comparisonContext | null;
    public expr_comparison(i?: number): Expr_comparisonContext[] | Expr_comparisonContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Expr_comparisonContext);
        }

        return this.getRuleContext(i, Expr_comparisonContext);
    }
    public IS_(): antlr.TerminalNode[];
    public IS_(i: number): antlr.TerminalNode | null;
    public IS_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.IS_);
    	} else {
    		return this.getToken(SQLiteParser.IS_, i);
    	}
    }
    public BETWEEN_(): antlr.TerminalNode[];
    public BETWEEN_(i: number): antlr.TerminalNode | null;
    public BETWEEN_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.BETWEEN_);
    	} else {
    		return this.getToken(SQLiteParser.BETWEEN_, i);
    	}
    }
    public AND_(): antlr.TerminalNode[];
    public AND_(i: number): antlr.TerminalNode | null;
    public AND_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.AND_);
    	} else {
    		return this.getToken(SQLiteParser.AND_, i);
    	}
    }
    public IN_(): antlr.TerminalNode[];
    public IN_(i: number): antlr.TerminalNode | null;
    public IN_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.IN_);
    	} else {
    		return this.getToken(SQLiteParser.IN_, i);
    	}
    }
    public ISNULL_(): antlr.TerminalNode[];
    public ISNULL_(i: number): antlr.TerminalNode | null;
    public ISNULL_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.ISNULL_);
    	} else {
    		return this.getToken(SQLiteParser.ISNULL_, i);
    	}
    }
    public NOTNULL_(): antlr.TerminalNode[];
    public NOTNULL_(i: number): antlr.TerminalNode | null;
    public NOTNULL_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.NOTNULL_);
    	} else {
    		return this.getToken(SQLiteParser.NOTNULL_, i);
    	}
    }
    public NOT_(): antlr.TerminalNode[];
    public NOT_(i: number): antlr.TerminalNode | null;
    public NOT_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.NOT_);
    	} else {
    		return this.getToken(SQLiteParser.NOT_, i);
    	}
    }
    public NULL_(): antlr.TerminalNode[];
    public NULL_(i: number): antlr.TerminalNode | null;
    public NULL_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.NULL_);
    	} else {
    		return this.getToken(SQLiteParser.NULL_, i);
    	}
    }
    public ASSIGN(): antlr.TerminalNode[];
    public ASSIGN(i: number): antlr.TerminalNode | null;
    public ASSIGN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.ASSIGN);
    	} else {
    		return this.getToken(SQLiteParser.ASSIGN, i);
    	}
    }
    public EQ(): antlr.TerminalNode[];
    public EQ(i: number): antlr.TerminalNode | null;
    public EQ(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.EQ);
    	} else {
    		return this.getToken(SQLiteParser.EQ, i);
    	}
    }
    public NOT_EQ1(): antlr.TerminalNode[];
    public NOT_EQ1(i: number): antlr.TerminalNode | null;
    public NOT_EQ1(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.NOT_EQ1);
    	} else {
    		return this.getToken(SQLiteParser.NOT_EQ1, i);
    	}
    }
    public NOT_EQ2(): antlr.TerminalNode[];
    public NOT_EQ2(i: number): antlr.TerminalNode | null;
    public NOT_EQ2(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.NOT_EQ2);
    	} else {
    		return this.getToken(SQLiteParser.NOT_EQ2, i);
    	}
    }
    public OPEN_PAR(): antlr.TerminalNode[];
    public OPEN_PAR(i: number): antlr.TerminalNode | null;
    public OPEN_PAR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.OPEN_PAR);
    	} else {
    		return this.getToken(SQLiteParser.OPEN_PAR, i);
    	}
    }
    public CLOSE_PAR(): antlr.TerminalNode[];
    public CLOSE_PAR(i: number): antlr.TerminalNode | null;
    public CLOSE_PAR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.CLOSE_PAR);
    	} else {
    		return this.getToken(SQLiteParser.CLOSE_PAR, i);
    	}
    }
    public table_name(): Table_nameContext[];
    public table_name(i: number): Table_nameContext | null;
    public table_name(i?: number): Table_nameContext[] | Table_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Table_nameContext);
        }

        return this.getRuleContext(i, Table_nameContext);
    }
    public table_function_name(): Table_function_nameContext[];
    public table_function_name(i: number): Table_function_nameContext | null;
    public table_function_name(i?: number): Table_function_nameContext[] | Table_function_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Table_function_nameContext);
        }

        return this.getRuleContext(i, Table_function_nameContext);
    }
    public LIKE_(): antlr.TerminalNode[];
    public LIKE_(i: number): antlr.TerminalNode | null;
    public LIKE_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.LIKE_);
    	} else {
    		return this.getToken(SQLiteParser.LIKE_, i);
    	}
    }
    public DISTINCT_(): antlr.TerminalNode[];
    public DISTINCT_(i: number): antlr.TerminalNode | null;
    public DISTINCT_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.DISTINCT_);
    	} else {
    		return this.getToken(SQLiteParser.DISTINCT_, i);
    	}
    }
    public FROM_(): antlr.TerminalNode[];
    public FROM_(i: number): antlr.TerminalNode | null;
    public FROM_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.FROM_);
    	} else {
    		return this.getToken(SQLiteParser.FROM_, i);
    	}
    }
    public GLOB_(): antlr.TerminalNode[];
    public GLOB_(i: number): antlr.TerminalNode | null;
    public GLOB_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.GLOB_);
    	} else {
    		return this.getToken(SQLiteParser.GLOB_, i);
    	}
    }
    public REGEXP_(): antlr.TerminalNode[];
    public REGEXP_(i: number): antlr.TerminalNode | null;
    public REGEXP_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.REGEXP_);
    	} else {
    		return this.getToken(SQLiteParser.REGEXP_, i);
    	}
    }
    public MATCH_(): antlr.TerminalNode[];
    public MATCH_(i: number): antlr.TerminalNode | null;
    public MATCH_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.MATCH_);
    	} else {
    		return this.getToken(SQLiteParser.MATCH_, i);
    	}
    }
    public select_stmt(): Select_stmtContext[];
    public select_stmt(i: number): Select_stmtContext | null;
    public select_stmt(i?: number): Select_stmtContext[] | Select_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Select_stmtContext);
        }

        return this.getRuleContext(i, Select_stmtContext);
    }
    public schema_name(): Schema_nameContext[];
    public schema_name(i: number): Schema_nameContext | null;
    public schema_name(i?: number): Schema_nameContext[] | Schema_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Schema_nameContext);
        }

        return this.getRuleContext(i, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.DOT);
    	} else {
    		return this.getToken(SQLiteParser.DOT, i);
    	}
    }
    public ESCAPE_(): antlr.TerminalNode[];
    public ESCAPE_(i: number): antlr.TerminalNode | null;
    public ESCAPE_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.ESCAPE_);
    	} else {
    		return this.getToken(SQLiteParser.ESCAPE_, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr_binary;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr_binary) {
             listener.enterExpr_binary(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr_binary) {
             listener.exitExpr_binary(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_binary) {
            return visitor.visitExpr_binary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_comparisonContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr_bitwise(): Expr_bitwiseContext[];
    public expr_bitwise(i: number): Expr_bitwiseContext | null;
    public expr_bitwise(i?: number): Expr_bitwiseContext[] | Expr_bitwiseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Expr_bitwiseContext);
        }

        return this.getRuleContext(i, Expr_bitwiseContext);
    }
    public LT(): antlr.TerminalNode[];
    public LT(i: number): antlr.TerminalNode | null;
    public LT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.LT);
    	} else {
    		return this.getToken(SQLiteParser.LT, i);
    	}
    }
    public LT_EQ(): antlr.TerminalNode[];
    public LT_EQ(i: number): antlr.TerminalNode | null;
    public LT_EQ(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.LT_EQ);
    	} else {
    		return this.getToken(SQLiteParser.LT_EQ, i);
    	}
    }
    public GT(): antlr.TerminalNode[];
    public GT(i: number): antlr.TerminalNode | null;
    public GT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.GT);
    	} else {
    		return this.getToken(SQLiteParser.GT, i);
    	}
    }
    public GT_EQ(): antlr.TerminalNode[];
    public GT_EQ(i: number): antlr.TerminalNode | null;
    public GT_EQ(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.GT_EQ);
    	} else {
    		return this.getToken(SQLiteParser.GT_EQ, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr_comparison;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr_comparison) {
             listener.enterExpr_comparison(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr_comparison) {
             listener.exitExpr_comparison(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_comparison) {
            return visitor.visitExpr_comparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_bitwiseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr_addition(): Expr_additionContext[];
    public expr_addition(i: number): Expr_additionContext | null;
    public expr_addition(i?: number): Expr_additionContext[] | Expr_additionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Expr_additionContext);
        }

        return this.getRuleContext(i, Expr_additionContext);
    }
    public LT2(): antlr.TerminalNode[];
    public LT2(i: number): antlr.TerminalNode | null;
    public LT2(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.LT2);
    	} else {
    		return this.getToken(SQLiteParser.LT2, i);
    	}
    }
    public GT2(): antlr.TerminalNode[];
    public GT2(i: number): antlr.TerminalNode | null;
    public GT2(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.GT2);
    	} else {
    		return this.getToken(SQLiteParser.GT2, i);
    	}
    }
    public AMP(): antlr.TerminalNode[];
    public AMP(i: number): antlr.TerminalNode | null;
    public AMP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.AMP);
    	} else {
    		return this.getToken(SQLiteParser.AMP, i);
    	}
    }
    public PIPE(): antlr.TerminalNode[];
    public PIPE(i: number): antlr.TerminalNode | null;
    public PIPE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.PIPE);
    	} else {
    		return this.getToken(SQLiteParser.PIPE, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr_bitwise;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr_bitwise) {
             listener.enterExpr_bitwise(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr_bitwise) {
             listener.exitExpr_bitwise(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_bitwise) {
            return visitor.visitExpr_bitwise(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_additionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr_multiplication(): Expr_multiplicationContext[];
    public expr_multiplication(i: number): Expr_multiplicationContext | null;
    public expr_multiplication(i?: number): Expr_multiplicationContext[] | Expr_multiplicationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Expr_multiplicationContext);
        }

        return this.getRuleContext(i, Expr_multiplicationContext);
    }
    public PLUS(): antlr.TerminalNode[];
    public PLUS(i: number): antlr.TerminalNode | null;
    public PLUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.PLUS);
    	} else {
    		return this.getToken(SQLiteParser.PLUS, i);
    	}
    }
    public MINUS(): antlr.TerminalNode[];
    public MINUS(i: number): antlr.TerminalNode | null;
    public MINUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.MINUS);
    	} else {
    		return this.getToken(SQLiteParser.MINUS, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr_addition;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr_addition) {
             listener.enterExpr_addition(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr_addition) {
             listener.exitExpr_addition(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_addition) {
            return visitor.visitExpr_addition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_multiplicationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr_string(): Expr_stringContext[];
    public expr_string(i: number): Expr_stringContext | null;
    public expr_string(i?: number): Expr_stringContext[] | Expr_stringContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Expr_stringContext);
        }

        return this.getRuleContext(i, Expr_stringContext);
    }
    public STAR(): antlr.TerminalNode[];
    public STAR(i: number): antlr.TerminalNode | null;
    public STAR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.STAR);
    	} else {
    		return this.getToken(SQLiteParser.STAR, i);
    	}
    }
    public DIV(): antlr.TerminalNode[];
    public DIV(i: number): antlr.TerminalNode | null;
    public DIV(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.DIV);
    	} else {
    		return this.getToken(SQLiteParser.DIV, i);
    	}
    }
    public MOD(): antlr.TerminalNode[];
    public MOD(i: number): antlr.TerminalNode | null;
    public MOD(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.MOD);
    	} else {
    		return this.getToken(SQLiteParser.MOD, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr_multiplication;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr_multiplication) {
             listener.enterExpr_multiplication(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr_multiplication) {
             listener.exitExpr_multiplication(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_multiplication) {
            return visitor.visitExpr_multiplication(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_stringContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr_collate(): Expr_collateContext[];
    public expr_collate(i: number): Expr_collateContext | null;
    public expr_collate(i?: number): Expr_collateContext[] | Expr_collateContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Expr_collateContext);
        }

        return this.getRuleContext(i, Expr_collateContext);
    }
    public PIPE2(): antlr.TerminalNode[];
    public PIPE2(i: number): antlr.TerminalNode | null;
    public PIPE2(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.PIPE2);
    	} else {
    		return this.getToken(SQLiteParser.PIPE2, i);
    	}
    }
    public JPTR(): antlr.TerminalNode[];
    public JPTR(i: number): antlr.TerminalNode | null;
    public JPTR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.JPTR);
    	} else {
    		return this.getToken(SQLiteParser.JPTR, i);
    	}
    }
    public JPTR2(): antlr.TerminalNode[];
    public JPTR2(i: number): antlr.TerminalNode | null;
    public JPTR2(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.JPTR2);
    	} else {
    		return this.getToken(SQLiteParser.JPTR2, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr_string;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr_string) {
             listener.enterExpr_string(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr_string) {
             listener.exitExpr_string(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_string) {
            return visitor.visitExpr_string(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_collateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr_unary(): Expr_unaryContext {
        return this.getRuleContext(0, Expr_unaryContext)!;
    }
    public COLLATE_(): antlr.TerminalNode[];
    public COLLATE_(i: number): antlr.TerminalNode | null;
    public COLLATE_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COLLATE_);
    	} else {
    		return this.getToken(SQLiteParser.COLLATE_, i);
    	}
    }
    public collation_name(): Collation_nameContext[];
    public collation_name(i: number): Collation_nameContext | null;
    public collation_name(i?: number): Collation_nameContext[] | Collation_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Collation_nameContext);
        }

        return this.getRuleContext(i, Collation_nameContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr_collate;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr_collate) {
             listener.enterExpr_collate(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr_collate) {
             listener.exitExpr_collate(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_collate) {
            return visitor.visitExpr_collate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_unaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr_base(): Expr_baseContext {
        return this.getRuleContext(0, Expr_baseContext)!;
    }
    public MINUS(): antlr.TerminalNode[];
    public MINUS(i: number): antlr.TerminalNode | null;
    public MINUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.MINUS);
    	} else {
    		return this.getToken(SQLiteParser.MINUS, i);
    	}
    }
    public PLUS(): antlr.TerminalNode[];
    public PLUS(i: number): antlr.TerminalNode | null;
    public PLUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.PLUS);
    	} else {
    		return this.getToken(SQLiteParser.PLUS, i);
    	}
    }
    public TILDE(): antlr.TerminalNode[];
    public TILDE(i: number): antlr.TerminalNode | null;
    public TILDE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.TILDE);
    	} else {
    		return this.getToken(SQLiteParser.TILDE, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr_unary;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr_unary) {
             listener.enterExpr_unary(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr_unary) {
             listener.exitExpr_unary(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_unary) {
            return visitor.visitExpr_unary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_baseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public literal_value(): Literal_valueContext | null {
        return this.getRuleContext(0, Literal_valueContext);
    }
    public BIND_PARAMETER(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BIND_PARAMETER, 0);
    }
    public table_name(): Table_nameContext | null {
        return this.getRuleContext(0, Table_nameContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.DOT);
    	} else {
    		return this.getToken(SQLiteParser.DOT, i);
    	}
    }
    public column_name(): Column_nameContext | null {
        return this.getRuleContext(0, Column_nameContext);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public column_name_excluding_string(): Column_name_excluding_stringContext | null {
        return this.getRuleContext(0, Column_name_excluding_stringContext);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public select_stmt(): Select_stmtContext | null {
        return this.getRuleContext(0, Select_stmtContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public EXISTS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public raise_function(): Raise_functionContext | null {
        return this.getRuleContext(0, Raise_functionContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_expr_base;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterExpr_base) {
             listener.enterExpr_base(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitExpr_base) {
             listener.exitExpr_base(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_base) {
            return visitor.visitExpr_base(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Raise_functionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RAISE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.RAISE_, 0)!;
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public IGNORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    public error_message(): Error_messageContext | null {
        return this.getRuleContext(0, Error_messageContext);
    }
    public ROLLBACK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    public ABORT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    public FAIL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_raise_function;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterRaise_function) {
             listener.enterRaise_function(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitRaise_function) {
             listener.exitRaise_function(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitRaise_function) {
            return visitor.visitRaise_function(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Literal_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMERIC_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NUMERIC_LITERAL, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0);
    }
    public BLOB_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BLOB_LITERAL, 0);
    }
    public NULL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NULL_, 0);
    }
    public TRUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRUE_, 0);
    }
    public FALSE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FALSE_, 0);
    }
    public CURRENT_TIME_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_TIME_, 0);
    }
    public CURRENT_DATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_DATE_, 0);
    }
    public CURRENT_TIMESTAMP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_TIMESTAMP_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_literal_value;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterLiteral_value) {
             listener.enterLiteral_value(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitLiteral_value) {
             listener.exitLiteral_value(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitLiteral_value) {
            return visitor.visitLiteral_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Percentile_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WITHIN_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.WITHIN_, 0)!;
    }
    public GROUP_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.GROUP_, 0)!;
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public ORDER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ORDER_, 0)!;
    }
    public BY_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.BY_, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_percentile_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterPercentile_clause) {
             listener.enterPercentile_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitPercentile_clause) {
             listener.exitPercentile_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitPercentile_clause) {
            return visitor.visitPercentile_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Value_rowContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_value_row;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterValue_row) {
             listener.enterValue_row(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitValue_row) {
             listener.exitValue_row(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitValue_row) {
            return visitor.visitValue_row(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Values_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VALUES_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.VALUES_, 0)!;
    }
    public value_row(): Value_rowContext[];
    public value_row(i: number): Value_rowContext | null;
    public value_row(i?: number): Value_rowContext[] | Value_rowContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Value_rowContext);
        }

        return this.getRuleContext(i, Value_rowContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_values_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterValues_clause) {
             listener.enterValues_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitValues_clause) {
             listener.exitValues_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitValues_clause) {
            return visitor.visitValues_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Insert_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTO_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.INTO_, 0)!;
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public INSERT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INSERT_, 0);
    }
    public REPLACE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REPLACE_, 0);
    }
    public OR_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OR_, 0);
    }
    public select_stmt(): Select_stmtContext | null {
        return this.getRuleContext(0, Select_stmtContext);
    }
    public DEFAULT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DEFAULT_, 0);
    }
    public VALUES_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.VALUES_, 0);
    }
    public with_clause(): With_clauseContext | null {
        return this.getRuleContext(0, With_clauseContext);
    }
    public ROLLBACK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    public ABORT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    public FAIL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    public IGNORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public table_alias(): Table_aliasContext | null {
        return this.getRuleContext(0, Table_aliasContext);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public returning_clause(): Returning_clauseContext | null {
        return this.getRuleContext(0, Returning_clauseContext);
    }
    public upsert_clause(): Upsert_clauseContext[];
    public upsert_clause(i: number): Upsert_clauseContext | null;
    public upsert_clause(i?: number): Upsert_clauseContext[] | Upsert_clauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Upsert_clauseContext);
        }

        return this.getRuleContext(i, Upsert_clauseContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_insert_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterInsert_stmt) {
             listener.enterInsert_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitInsert_stmt) {
             listener.exitInsert_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitInsert_stmt) {
            return visitor.visitInsert_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Returning_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RETURNING_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.RETURNING_, 0)!;
    }
    public STAR(): antlr.TerminalNode[];
    public STAR(i: number): antlr.TerminalNode | null;
    public STAR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.STAR);
    	} else {
    		return this.getToken(SQLiteParser.STAR, i);
    	}
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public column_alias(): Column_aliasContext[];
    public column_alias(i: number): Column_aliasContext | null;
    public column_alias(i?: number): Column_aliasContext[] | Column_aliasContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_aliasContext);
        }

        return this.getRuleContext(i, Column_aliasContext);
    }
    public AS_(): antlr.TerminalNode[];
    public AS_(i: number): antlr.TerminalNode | null;
    public AS_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.AS_);
    	} else {
    		return this.getToken(SQLiteParser.AS_, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_returning_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterReturning_clause) {
             listener.enterReturning_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitReturning_clause) {
             listener.exitReturning_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitReturning_clause) {
            return visitor.visitReturning_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Upsert_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ON_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ON_, 0)!;
    }
    public CONFLICT_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CONFLICT_, 0)!;
    }
    public DO_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.DO_, 0)!;
    }
    public NOTHING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOTHING_, 0);
    }
    public UPDATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UPDATE_, 0);
    }
    public SET_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.SET_, 0);
    }
    public ASSIGN(): antlr.TerminalNode[];
    public ASSIGN(i: number): antlr.TerminalNode | null;
    public ASSIGN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.ASSIGN);
    	} else {
    		return this.getToken(SQLiteParser.ASSIGN, i);
    	}
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public indexed_column(): Indexed_columnContext[];
    public indexed_column(i: number): Indexed_columnContext | null;
    public indexed_column(i?: number): Indexed_columnContext[] | Indexed_columnContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Indexed_columnContext);
        }

        return this.getRuleContext(i, Indexed_columnContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public column_name_list(): Column_name_listContext[];
    public column_name_list(i: number): Column_name_listContext | null;
    public column_name_list(i?: number): Column_name_listContext[] | Column_name_listContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_name_listContext);
        }

        return this.getRuleContext(i, Column_name_listContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public WHERE_(): antlr.TerminalNode[];
    public WHERE_(i: number): antlr.TerminalNode | null;
    public WHERE_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.WHERE_);
    	} else {
    		return this.getToken(SQLiteParser.WHERE_, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_upsert_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterUpsert_clause) {
             listener.enterUpsert_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitUpsert_clause) {
             listener.exitUpsert_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitUpsert_clause) {
            return visitor.visitUpsert_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Pragma_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PRAGMA_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.PRAGMA_, 0)!;
    }
    public pragma_name(): Pragma_nameContext {
        return this.getRuleContext(0, Pragma_nameContext)!;
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ASSIGN, 0);
    }
    public pragma_value(): Pragma_valueContext | null {
        return this.getRuleContext(0, Pragma_valueContext);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_pragma_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterPragma_stmt) {
             listener.enterPragma_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitPragma_stmt) {
             listener.exitPragma_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitPragma_stmt) {
            return visitor.visitPragma_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Pragma_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public signed_number(): Signed_numberContext | null {
        return this.getRuleContext(0, Signed_numberContext);
    }
    public name(): NameContext | null {
        return this.getRuleContext(0, NameContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_pragma_value;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterPragma_value) {
             listener.enterPragma_value(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitPragma_value) {
             listener.exitPragma_value(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitPragma_value) {
            return visitor.visitPragma_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Reindex_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REINDEX_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.REINDEX_, 0)!;
    }
    public collation_name(): Collation_nameContext | null {
        return this.getRuleContext(0, Collation_nameContext);
    }
    public table_name(): Table_nameContext | null {
        return this.getRuleContext(0, Table_nameContext);
    }
    public index_name(): Index_nameContext | null {
        return this.getRuleContext(0, Index_nameContext);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_reindex_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterReindex_stmt) {
             listener.enterReindex_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitReindex_stmt) {
             listener.exitReindex_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitReindex_stmt) {
            return visitor.visitReindex_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Select_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public select_core(): Select_coreContext[];
    public select_core(i: number): Select_coreContext | null;
    public select_core(i?: number): Select_coreContext[] | Select_coreContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Select_coreContext);
        }

        return this.getRuleContext(i, Select_coreContext);
    }
    public with_clause(): With_clauseContext | null {
        return this.getRuleContext(0, With_clauseContext);
    }
    public compound_operator(): Compound_operatorContext[];
    public compound_operator(i: number): Compound_operatorContext | null;
    public compound_operator(i?: number): Compound_operatorContext[] | Compound_operatorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Compound_operatorContext);
        }

        return this.getRuleContext(i, Compound_operatorContext);
    }
    public order_clause(): Order_clauseContext | null {
        return this.getRuleContext(0, Order_clauseContext);
    }
    public limit_clause(): Limit_clauseContext | null {
        return this.getRuleContext(0, Limit_clauseContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_select_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSelect_stmt) {
             listener.enterSelect_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSelect_stmt) {
             listener.exitSelect_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSelect_stmt) {
            return visitor.visitSelect_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Join_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public table_or_subquery(): Table_or_subqueryContext[];
    public table_or_subquery(i: number): Table_or_subqueryContext | null;
    public table_or_subquery(i?: number): Table_or_subqueryContext[] | Table_or_subqueryContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }

        return this.getRuleContext(i, Table_or_subqueryContext);
    }
    public join_operator(): Join_operatorContext[];
    public join_operator(i: number): Join_operatorContext | null;
    public join_operator(i?: number): Join_operatorContext[] | Join_operatorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Join_operatorContext);
        }

        return this.getRuleContext(i, Join_operatorContext);
    }
    public join_constraint(): Join_constraintContext[];
    public join_constraint(i: number): Join_constraintContext | null;
    public join_constraint(i?: number): Join_constraintContext[] | Join_constraintContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Join_constraintContext);
        }

        return this.getRuleContext(i, Join_constraintContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_join_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterJoin_clause) {
             listener.enterJoin_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitJoin_clause) {
             listener.exitJoin_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitJoin_clause) {
            return visitor.visitJoin_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Select_coreContext extends antlr.ParserRuleContext {
    public _where_expr?: ExprContext;
    public _expr?: ExprContext;
    public _group_by_expr: ExprContext[] = [];
    public _having_expr?: ExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SELECT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.SELECT_, 0);
    }
    public result_column(): Result_columnContext[];
    public result_column(i: number): Result_columnContext | null;
    public result_column(i?: number): Result_columnContext[] | Result_columnContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Result_columnContext);
        }

        return this.getRuleContext(i, Result_columnContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public FROM_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FROM_, 0);
    }
    public join_clause(): Join_clauseContext | null {
        return this.getRuleContext(0, Join_clauseContext);
    }
    public WHERE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    public GROUP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GROUP_, 0);
    }
    public BY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    public WINDOW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WINDOW_, 0);
    }
    public window_name(): Window_nameContext[];
    public window_name(i: number): Window_nameContext | null;
    public window_name(i?: number): Window_nameContext[] | Window_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Window_nameContext);
        }

        return this.getRuleContext(i, Window_nameContext);
    }
    public AS_(): antlr.TerminalNode[];
    public AS_(i: number): antlr.TerminalNode | null;
    public AS_(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.AS_);
    	} else {
    		return this.getToken(SQLiteParser.AS_, i);
    	}
    }
    public window_defn(): Window_defnContext[];
    public window_defn(i: number): Window_defnContext | null;
    public window_defn(i?: number): Window_defnContext[] | Window_defnContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Window_defnContext);
        }

        return this.getRuleContext(i, Window_defnContext);
    }
    public DISTINCT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DISTINCT_, 0);
    }
    public ALL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ALL_, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public HAVING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.HAVING_, 0);
    }
    public values_clause(): Values_clauseContext | null {
        return this.getRuleContext(0, Values_clauseContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_select_core;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSelect_core) {
             listener.enterSelect_core(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSelect_core) {
             listener.exitSelect_core(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSelect_core) {
            return visitor.visitSelect_core(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Table_or_subqueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public table_name(): Table_nameContext | null {
        return this.getRuleContext(0, Table_nameContext);
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public table_alias(): Table_aliasContext | null {
        return this.getRuleContext(0, Table_aliasContext);
    }
    public table_alias_excluding_joins(): Table_alias_excluding_joinsContext | null {
        return this.getRuleContext(0, Table_alias_excluding_joinsContext);
    }
    public INDEXED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INDEXED_, 0);
    }
    public BY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    public index_name(): Index_nameContext | null {
        return this.getRuleContext(0, Index_nameContext);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public table_function_name(): Table_function_nameContext | null {
        return this.getRuleContext(0, Table_function_nameContext);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public join_clause(): Join_clauseContext | null {
        return this.getRuleContext(0, Join_clauseContext);
    }
    public select_stmt(): Select_stmtContext | null {
        return this.getRuleContext(0, Select_stmtContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_table_or_subquery;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTable_or_subquery) {
             listener.enterTable_or_subquery(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTable_or_subquery) {
             listener.exitTable_or_subquery(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTable_or_subquery) {
            return visitor.visitTable_or_subquery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Result_columnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STAR, 0);
    }
    public table_name(): Table_nameContext | null {
        return this.getRuleContext(0, Table_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public column_alias(): Column_aliasContext | null {
        return this.getRuleContext(0, Column_aliasContext);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_result_column;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterResult_column) {
             listener.enterResult_column(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitResult_column) {
             listener.exitResult_column(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitResult_column) {
            return visitor.visitResult_column(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Join_operatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    public JOIN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.JOIN_, 0);
    }
    public NATURAL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NATURAL_, 0);
    }
    public INNER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INNER_, 0);
    }
    public CROSS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CROSS_, 0);
    }
    public LEFT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LEFT_, 0);
    }
    public RIGHT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RIGHT_, 0);
    }
    public FULL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FULL_, 0);
    }
    public OUTER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OUTER_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_join_operator;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterJoin_operator) {
             listener.enterJoin_operator(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitJoin_operator) {
             listener.exitJoin_operator(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitJoin_operator) {
            return visitor.visitJoin_operator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Join_constraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ON_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ON_, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public USING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.USING_, 0);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_join_constraint;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterJoin_constraint) {
             listener.enterJoin_constraint(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitJoin_constraint) {
             listener.exitJoin_constraint(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitJoin_constraint) {
            return visitor.visitJoin_constraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Compound_operatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNION_, 0);
    }
    public ALL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ALL_, 0);
    }
    public INTERSECT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INTERSECT_, 0);
    }
    public EXCEPT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXCEPT_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_compound_operator;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCompound_operator) {
             listener.enterCompound_operator(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCompound_operator) {
             listener.exitCompound_operator(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCompound_operator) {
            return visitor.visitCompound_operator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Update_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UPDATE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.UPDATE_, 0)!;
    }
    public qualified_table_name(): Qualified_table_nameContext {
        return this.getRuleContext(0, Qualified_table_nameContext)!;
    }
    public SET_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.SET_, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode[];
    public ASSIGN(i: number): antlr.TerminalNode | null;
    public ASSIGN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.ASSIGN);
    	} else {
    		return this.getToken(SQLiteParser.ASSIGN, i);
    	}
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public column_name_list(): Column_name_listContext[];
    public column_name_list(i: number): Column_name_listContext | null;
    public column_name_list(i?: number): Column_name_listContext[] | Column_name_listContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_name_listContext);
        }

        return this.getRuleContext(i, Column_name_listContext);
    }
    public with_clause(): With_clauseContext | null {
        return this.getRuleContext(0, With_clauseContext);
    }
    public OR_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OR_, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public FROM_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FROM_, 0);
    }
    public join_clause(): Join_clauseContext | null {
        return this.getRuleContext(0, Join_clauseContext);
    }
    public WHERE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    public returning_clause(): Returning_clauseContext | null {
        return this.getRuleContext(0, Returning_clauseContext);
    }
    public order_clause(): Order_clauseContext | null {
        return this.getRuleContext(0, Order_clauseContext);
    }
    public limit_clause(): Limit_clauseContext | null {
        return this.getRuleContext(0, Limit_clauseContext);
    }
    public ROLLBACK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    public ABORT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    public REPLACE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REPLACE_, 0);
    }
    public FAIL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    public IGNORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_update_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterUpdate_stmt) {
             listener.enterUpdate_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitUpdate_stmt) {
             listener.exitUpdate_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitUpdate_stmt) {
            return visitor.visitUpdate_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Column_name_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public column_name(): Column_nameContext[];
    public column_name(i: number): Column_nameContext | null;
    public column_name(i?: number): Column_nameContext[] | Column_nameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }

        return this.getRuleContext(i, Column_nameContext);
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_column_name_list;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterColumn_name_list) {
             listener.enterColumn_name_list(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitColumn_name_list) {
             listener.exitColumn_name_list(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitColumn_name_list) {
            return visitor.visitColumn_name_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Qualified_table_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public table_name(): Table_nameContext {
        return this.getRuleContext(0, Table_nameContext)!;
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    public AS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    public alias(): AliasContext | null {
        return this.getRuleContext(0, AliasContext);
    }
    public INDEXED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INDEXED_, 0);
    }
    public BY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    public index_name(): Index_nameContext | null {
        return this.getRuleContext(0, Index_nameContext);
    }
    public NOT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_qualified_table_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterQualified_table_name) {
             listener.enterQualified_table_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitQualified_table_name) {
             listener.exitQualified_table_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitQualified_table_name) {
            return visitor.visitQualified_table_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Vacuum_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VACUUM_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.VACUUM_, 0)!;
    }
    public schema_name(): Schema_nameContext | null {
        return this.getRuleContext(0, Schema_nameContext);
    }
    public INTO_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INTO_, 0);
    }
    public filename(): FilenameContext | null {
        return this.getRuleContext(0, FilenameContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_vacuum_stmt;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterVacuum_stmt) {
             listener.enterVacuum_stmt(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitVacuum_stmt) {
             listener.exitVacuum_stmt(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitVacuum_stmt) {
            return visitor.visitVacuum_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Filter_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FILTER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.FILTER_, 0)!;
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public WHERE_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.WHERE_, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_filter_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFilter_clause) {
             listener.enterFilter_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFilter_clause) {
             listener.exitFilter_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFilter_clause) {
            return visitor.visitFilter_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Window_defnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OPEN_PAR, 0)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0)!;
    }
    public base_window_name(): Base_window_nameContext | null {
        return this.getRuleContext(0, Base_window_nameContext);
    }
    public PARTITION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PARTITION_, 0);
    }
    public BY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public order_clause(): Order_clauseContext | null {
        return this.getRuleContext(0, Order_clauseContext);
    }
    public frame_spec(): Frame_specContext | null {
        return this.getRuleContext(0, Frame_specContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_window_defn;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterWindow_defn) {
             listener.enterWindow_defn(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitWindow_defn) {
             listener.exitWindow_defn(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitWindow_defn) {
            return visitor.visitWindow_defn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Over_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OVER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.OVER_, 0)!;
    }
    public window_name(): Window_nameContext | null {
        return this.getRuleContext(0, Window_nameContext);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public base_window_name(): Base_window_nameContext | null {
        return this.getRuleContext(0, Base_window_nameContext);
    }
    public PARTITION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PARTITION_, 0);
    }
    public BY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public order_clause(): Order_clauseContext | null {
        return this.getRuleContext(0, Order_clauseContext);
    }
    public frame_spec(): Frame_specContext | null {
        return this.getRuleContext(0, Frame_specContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_over_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterOver_clause) {
             listener.enterOver_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitOver_clause) {
             listener.exitOver_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitOver_clause) {
            return visitor.visitOver_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Frame_specContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public frame_clause(): Frame_clauseContext {
        return this.getRuleContext(0, Frame_clauseContext)!;
    }
    public EXCLUDE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXCLUDE_, 0);
    }
    public NO_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NO_, 0);
    }
    public OTHERS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OTHERS_, 0);
    }
    public CURRENT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    public ROW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    public GROUP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GROUP_, 0);
    }
    public TIES_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TIES_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_frame_spec;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFrame_spec) {
             listener.enterFrame_spec(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFrame_spec) {
             listener.exitFrame_spec(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFrame_spec) {
            return visitor.visitFrame_spec(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Frame_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RANGE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RANGE_, 0);
    }
    public ROWS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROWS_, 0);
    }
    public GROUPS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GROUPS_, 0);
    }
    public frame_single(): Frame_singleContext | null {
        return this.getRuleContext(0, Frame_singleContext);
    }
    public BETWEEN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BETWEEN_, 0);
    }
    public frame_left(): Frame_leftContext | null {
        return this.getRuleContext(0, Frame_leftContext);
    }
    public AND_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AND_, 0);
    }
    public frame_right(): Frame_rightContext | null {
        return this.getRuleContext(0, Frame_rightContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_frame_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFrame_clause) {
             listener.enterFrame_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFrame_clause) {
             listener.exitFrame_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFrame_clause) {
            return visitor.visitFrame_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Order_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ORDER_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.ORDER_, 0)!;
    }
    public BY_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.BY_, 0)!;
    }
    public ordering_term(): Ordering_termContext[];
    public ordering_term(i: number): Ordering_termContext | null;
    public ordering_term(i?: number): Ordering_termContext[] | Ordering_termContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }

        return this.getRuleContext(i, Ordering_termContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SQLiteParser.COMMA);
    	} else {
    		return this.getToken(SQLiteParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_order_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterOrder_clause) {
             listener.enterOrder_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitOrder_clause) {
             listener.exitOrder_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitOrder_clause) {
            return visitor.visitOrder_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Limit_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIMIT_(): antlr.TerminalNode {
        return this.getToken(SQLiteParser.LIMIT_, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public OFFSET_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OFFSET_, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_limit_clause;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterLimit_clause) {
             listener.enterLimit_clause(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitLimit_clause) {
             listener.exitLimit_clause(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitLimit_clause) {
            return visitor.visitLimit_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Ordering_termContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public COLLATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COLLATE_, 0);
    }
    public collation_name(): Collation_nameContext | null {
        return this.getRuleContext(0, Collation_nameContext);
    }
    public asc_desc(): Asc_descContext | null {
        return this.getRuleContext(0, Asc_descContext);
    }
    public NULLS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NULLS_, 0);
    }
    public FIRST_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FIRST_, 0);
    }
    public LAST_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LAST_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_ordering_term;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterOrdering_term) {
             listener.enterOrdering_term(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitOrdering_term) {
             listener.exitOrdering_term(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitOrdering_term) {
            return visitor.visitOrdering_term(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Asc_descContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASC_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ASC_, 0);
    }
    public DESC_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DESC_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_asc_desc;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAsc_desc) {
             listener.enterAsc_desc(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAsc_desc) {
             listener.exitAsc_desc(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAsc_desc) {
            return visitor.visitAsc_desc(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Frame_leftContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public PRECEDING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRECEDING_, 0);
    }
    public FOLLOWING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FOLLOWING_, 0);
    }
    public CURRENT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    public ROW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_frame_left;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFrame_left) {
             listener.enterFrame_left(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFrame_left) {
             listener.exitFrame_left(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFrame_left) {
            return visitor.visitFrame_left(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Frame_rightContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public PRECEDING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRECEDING_, 0);
    }
    public FOLLOWING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FOLLOWING_, 0);
    }
    public CURRENT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    public ROW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_frame_right;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFrame_right) {
             listener.enterFrame_right(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFrame_right) {
             listener.exitFrame_right(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFrame_right) {
            return visitor.visitFrame_right(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Frame_singleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public PRECEDING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRECEDING_, 0);
    }
    public CURRENT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    public ROW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_frame_single;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFrame_single) {
             listener.enterFrame_single(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFrame_single) {
             listener.exitFrame_single(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFrame_single) {
            return visitor.visitFrame_single(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Error_messageContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_error_message;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterError_message) {
             listener.enterError_message(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitError_message) {
             listener.exitError_message(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitError_message) {
            return visitor.visitError_message(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FilenameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_filename;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFilename) {
             listener.enterFilename(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFilename) {
             listener.exitFilename(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFilename) {
            return visitor.visitFilename(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Module_argumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public module_argument_outer(): Module_argument_outerContext[];
    public module_argument_outer(i: number): Module_argument_outerContext | null;
    public module_argument_outer(i?: number): Module_argument_outerContext[] | Module_argument_outerContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Module_argument_outerContext);
        }

        return this.getRuleContext(i, Module_argument_outerContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_module_argument;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterModule_argument) {
             listener.enterModule_argument(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitModule_argument) {
             listener.exitModule_argument(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitModule_argument) {
            return visitor.visitModule_argument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Module_argument_outerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public UNEXPECTED_CHAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNEXPECTED_CHAR, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    public module_argument_inner(): Module_argument_innerContext[];
    public module_argument_inner(i: number): Module_argument_innerContext | null;
    public module_argument_inner(i?: number): Module_argument_innerContext[] | Module_argument_innerContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Module_argument_innerContext);
        }

        return this.getRuleContext(i, Module_argument_innerContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_module_argument_outer;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterModule_argument_outer) {
             listener.enterModule_argument_outer(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitModule_argument_outer) {
             listener.exitModule_argument_outer(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitModule_argument_outer) {
            return visitor.visitModule_argument_outer(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Module_argument_innerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPEN_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    public CLOSE_PAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    public UNEXPECTED_CHAR(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNEXPECTED_CHAR, 0);
    }
    public module_argument_inner(): Module_argument_innerContext[];
    public module_argument_inner(i: number): Module_argument_innerContext | null;
    public module_argument_inner(i?: number): Module_argument_innerContext[] | Module_argument_innerContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Module_argument_innerContext);
        }

        return this.getRuleContext(i, Module_argument_innerContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_module_argument_inner;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterModule_argument_inner) {
             listener.enterModule_argument_inner(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitModule_argument_inner) {
             listener.exitModule_argument_inner(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitModule_argument_inner) {
            return visitor.visitModule_argument_inner(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fallback_excluding_conflictsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABORT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    public ACTION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ACTION_, 0);
    }
    public AFTER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.AFTER_, 0);
    }
    public ALWAYS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ALWAYS_, 0);
    }
    public ANALYZE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ANALYZE_, 0);
    }
    public ASC_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ASC_, 0);
    }
    public ATTACH_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ATTACH_, 0);
    }
    public BEFORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BEFORE_, 0);
    }
    public BEGIN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BEGIN_, 0);
    }
    public BY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    public CASCADE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CASCADE_, 0);
    }
    public CAST_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CAST_, 0);
    }
    public COLUMN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.COLUMN_, 0);
    }
    public CONFLICT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CONFLICT_, 0);
    }
    public CURRENT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    public CURRENT_DATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_DATE_, 0);
    }
    public CURRENT_TIME_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_TIME_, 0);
    }
    public CURRENT_TIMESTAMP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CURRENT_TIMESTAMP_, 0);
    }
    public DATABASE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DATABASE_, 0);
    }
    public DEFERRED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DEFERRED_, 0);
    }
    public DESC_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DESC_, 0);
    }
    public DETACH_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DETACH_, 0);
    }
    public DO_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.DO_, 0);
    }
    public EACH_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EACH_, 0);
    }
    public END_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.END_, 0);
    }
    public EXCEPT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXCEPT_, 0);
    }
    public EXCLUDE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXCLUDE_, 0);
    }
    public EXCLUSIVE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXCLUSIVE_, 0);
    }
    public EXPLAIN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.EXPLAIN_, 0);
    }
    public FAIL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    public FALSE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FALSE_, 0);
    }
    public FIRST_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FIRST_, 0);
    }
    public FOLLOWING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FOLLOWING_, 0);
    }
    public FOR_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FOR_, 0);
    }
    public GENERATED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GENERATED_, 0);
    }
    public GLOB_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GLOB_, 0);
    }
    public GROUPS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.GROUPS_, 0);
    }
    public IF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    public IGNORE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    public IMMEDIATE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IMMEDIATE_, 0);
    }
    public INITIALLY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INITIALLY_, 0);
    }
    public INSTEAD_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INSTEAD_, 0);
    }
    public INTERSECT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INTERSECT_, 0);
    }
    public KEY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.KEY_, 0);
    }
    public LAST_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LAST_, 0);
    }
    public LIKE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LIKE_, 0);
    }
    public MATCH_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.MATCH_, 0);
    }
    public MATERIALIZED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.MATERIALIZED_, 0);
    }
    public NO_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NO_, 0);
    }
    public NULLS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NULLS_, 0);
    }
    public OF_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OF_, 0);
    }
    public OFFSET_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OFFSET_, 0);
    }
    public OTHERS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OTHERS_, 0);
    }
    public PARTITION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PARTITION_, 0);
    }
    public PLAN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PLAN_, 0);
    }
    public PRAGMA_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRAGMA_, 0);
    }
    public PRECEDING_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.PRECEDING_, 0);
    }
    public QUERY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.QUERY_, 0);
    }
    public RANGE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RANGE_, 0);
    }
    public RECURSIVE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RECURSIVE_, 0);
    }
    public REGEXP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REGEXP_, 0);
    }
    public REINDEX_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REINDEX_, 0);
    }
    public RELEASE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RELEASE_, 0);
    }
    public RENAME_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RENAME_, 0);
    }
    public REPLACE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.REPLACE_, 0);
    }
    public RESTRICT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RESTRICT_, 0);
    }
    public ROLLBACK_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    public ROW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    public ROWID_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROWID_, 0);
    }
    public ROWS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.ROWS_, 0);
    }
    public SAVEPOINT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.SAVEPOINT_, 0);
    }
    public STORED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STORED_, 0);
    }
    public STRICT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STRICT_, 0);
    }
    public TEMP_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMP_, 0);
    }
    public TEMPORARY_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TEMPORARY_, 0);
    }
    public TIES_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TIES_, 0);
    }
    public TRIGGER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRIGGER_, 0);
    }
    public TRUE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.TRUE_, 0);
    }
    public UNBOUNDED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNBOUNDED_, 0);
    }
    public UNION_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.UNION_, 0);
    }
    public VACUUM_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.VACUUM_, 0);
    }
    public VIEW_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.VIEW_, 0);
    }
    public VIRTUAL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.VIRTUAL_, 0);
    }
    public WITH_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WITH_, 0);
    }
    public WITHIN_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WITHIN_, 0);
    }
    public WITHOUT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.WITHOUT_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_fallback_excluding_conflicts;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFallback_excluding_conflicts) {
             listener.enterFallback_excluding_conflicts(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFallback_excluding_conflicts) {
             listener.exitFallback_excluding_conflicts(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFallback_excluding_conflicts) {
            return visitor.visitFallback_excluding_conflicts(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Join_keywordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CROSS_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.CROSS_, 0);
    }
    public FULL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.FULL_, 0);
    }
    public INDEXED_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INDEXED_, 0);
    }
    public INNER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.INNER_, 0);
    }
    public LEFT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.LEFT_, 0);
    }
    public NATURAL_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.NATURAL_, 0);
    }
    public OUTER_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.OUTER_, 0);
    }
    public RIGHT_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RIGHT_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_join_keyword;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterJoin_keyword) {
             listener.enterJoin_keyword(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitJoin_keyword) {
             listener.exitJoin_keyword(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitJoin_keyword) {
            return visitor.visitJoin_keyword(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FallbackContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fallback_excluding_conflicts(): Fallback_excluding_conflictsContext | null {
        return this.getRuleContext(0, Fallback_excluding_conflictsContext);
    }
    public join_keyword(): Join_keywordContext | null {
        return this.getRuleContext(0, Join_keywordContext);
    }
    public RAISE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RAISE_, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_fallback;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFallback) {
             listener.enterFallback(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFallback) {
             listener.exitFallback(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFallback) {
            return visitor.visitFallback(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterName) {
             listener.enterName(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitName) {
             listener.exitName(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitName) {
            return visitor.visitName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Function_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name_excluding_raise(): Any_name_excluding_raiseContext {
        return this.getRuleContext(0, Any_name_excluding_raiseContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_function_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterFunction_name) {
             listener.enterFunction_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitFunction_name) {
             listener.exitFunction_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitFunction_name) {
            return visitor.visitFunction_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Schema_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_schema_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSchema_name) {
             listener.enterSchema_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSchema_name) {
             listener.exitSchema_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSchema_name) {
            return visitor.visitSchema_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Table_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_table_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTable_name) {
             listener.enterTable_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTable_name) {
             listener.exitTable_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTable_name) {
            return visitor.visitTable_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Table_or_index_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_table_or_index_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTable_or_index_name) {
             listener.enterTable_or_index_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTable_or_index_name) {
             listener.exitTable_or_index_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTable_or_index_name) {
            return visitor.visitTable_or_index_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Column_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_column_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterColumn_name) {
             listener.enterColumn_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitColumn_name) {
             listener.exitColumn_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitColumn_name) {
            return visitor.visitColumn_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Column_name_excluding_stringContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name_excluding_string(): Any_name_excluding_stringContext {
        return this.getRuleContext(0, Any_name_excluding_stringContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_column_name_excluding_string;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterColumn_name_excluding_string) {
             listener.enterColumn_name_excluding_string(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitColumn_name_excluding_string) {
             listener.exitColumn_name_excluding_string(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitColumn_name_excluding_string) {
            return visitor.visitColumn_name_excluding_string(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Column_aliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_column_alias;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterColumn_alias) {
             listener.enterColumn_alias(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitColumn_alias) {
             listener.exitColumn_alias(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitColumn_alias) {
            return visitor.visitColumn_alias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Collation_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_collation_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterCollation_name) {
             listener.enterCollation_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitCollation_name) {
             listener.exitCollation_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitCollation_name) {
            return visitor.visitCollation_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Foreign_tableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_foreign_table;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterForeign_table) {
             listener.enterForeign_table(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitForeign_table) {
             listener.exitForeign_table(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitForeign_table) {
            return visitor.visitForeign_table(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Index_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_index_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterIndex_name) {
             listener.enterIndex_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitIndex_name) {
             listener.exitIndex_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitIndex_name) {
            return visitor.visitIndex_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Trigger_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_trigger_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTrigger_name) {
             listener.enterTrigger_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTrigger_name) {
             listener.exitTrigger_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTrigger_name) {
            return visitor.visitTrigger_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class View_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_view_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterView_name) {
             listener.enterView_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitView_name) {
             listener.exitView_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitView_name) {
            return visitor.visitView_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Module_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_module_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterModule_name) {
             listener.enterModule_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitModule_name) {
             listener.exitModule_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitModule_name) {
            return visitor.visitModule_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Pragma_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_pragma_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterPragma_name) {
             listener.enterPragma_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitPragma_name) {
             listener.exitPragma_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitPragma_name) {
            return visitor.visitPragma_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Savepoint_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_savepoint_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterSavepoint_name) {
             listener.enterSavepoint_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitSavepoint_name) {
             listener.exitSavepoint_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitSavepoint_name) {
            return visitor.visitSavepoint_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Table_aliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_table_alias;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTable_alias) {
             listener.enterTable_alias(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTable_alias) {
             listener.exitTable_alias(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTable_alias) {
            return visitor.visitTable_alias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Table_alias_excluding_joinsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name_excluding_joins(): Any_name_excluding_joinsContext {
        return this.getRuleContext(0, Any_name_excluding_joinsContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_table_alias_excluding_joins;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTable_alias_excluding_joins) {
             listener.enterTable_alias_excluding_joins(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTable_alias_excluding_joins) {
             listener.exitTable_alias_excluding_joins(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTable_alias_excluding_joins) {
            return visitor.visitTable_alias_excluding_joins(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Window_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_window_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterWindow_name) {
             listener.enterWindow_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitWindow_name) {
             listener.exitWindow_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitWindow_name) {
            return visitor.visitWindow_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_alias;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAlias) {
             listener.enterAlias(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAlias) {
             listener.exitAlias(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAlias) {
            return visitor.visitAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Base_window_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_base_window_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterBase_window_name) {
             listener.enterBase_window_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitBase_window_name) {
             listener.exitBase_window_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitBase_window_name) {
            return visitor.visitBase_window_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Table_function_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public any_name(): Any_nameContext {
        return this.getRuleContext(0, Any_nameContext)!;
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_table_function_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterTable_function_name) {
             listener.enterTable_function_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitTable_function_name) {
             listener.exitTable_function_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitTable_function_name) {
            return visitor.visitTable_function_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Any_name_excluding_raiseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IDENTIFIER, 0);
    }
    public fallback_excluding_conflicts(): Fallback_excluding_conflictsContext | null {
        return this.getRuleContext(0, Fallback_excluding_conflictsContext);
    }
    public join_keyword(): Join_keywordContext | null {
        return this.getRuleContext(0, Join_keywordContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_any_name_excluding_raise;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAny_name_excluding_raise) {
             listener.enterAny_name_excluding_raise(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAny_name_excluding_raise) {
             listener.exitAny_name_excluding_raise(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAny_name_excluding_raise) {
            return visitor.visitAny_name_excluding_raise(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Any_name_excluding_joinsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IDENTIFIER, 0);
    }
    public fallback_excluding_conflicts(): Fallback_excluding_conflictsContext | null {
        return this.getRuleContext(0, Fallback_excluding_conflictsContext);
    }
    public RAISE_(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.RAISE_, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_any_name_excluding_joins;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAny_name_excluding_joins) {
             listener.enterAny_name_excluding_joins(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAny_name_excluding_joins) {
             listener.exitAny_name_excluding_joins(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAny_name_excluding_joins) {
            return visitor.visitAny_name_excluding_joins(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Any_name_excluding_stringContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IDENTIFIER, 0);
    }
    public fallback(): FallbackContext | null {
        return this.getRuleContext(0, FallbackContext);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_any_name_excluding_string;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAny_name_excluding_string) {
             listener.enterAny_name_excluding_string(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAny_name_excluding_string) {
             listener.exitAny_name_excluding_string(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAny_name_excluding_string) {
            return visitor.visitAny_name_excluding_string(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Any_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.IDENTIFIER, 0);
    }
    public fallback(): FallbackContext | null {
        return this.getRuleContext(0, FallbackContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return SQLiteParser.RULE_any_name;
    }
    public override enterRule(listener: SQLiteParserListener): void {
        if(listener.enterAny_name) {
             listener.enterAny_name(this);
        }
    }
    public override exitRule(listener: SQLiteParserListener): void {
        if(listener.exitAny_name) {
             listener.exitAny_name(this);
        }
    }
    public override accept<Result>(visitor: SQLiteParserVisitor<Result>): Result | null {
        if (visitor.visitAny_name) {
            return visitor.visitAny_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
